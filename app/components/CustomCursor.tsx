"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 })
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 })
  const ringX = useSpring(0, { stiffness: 200, damping: 20 })
  const ringY = useSpring(0, { stiffness: 200, damping: 20 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      ringX.set(e.clientX)
      ringY.set(e.clientY)
    }

    const enter = () => setVisible(true)
    const leave = () => setVisible(false)

    const hoverStart = () => setIsHovering(true)
    const hoverEnd = () => setIsHovering(false)

    document.addEventListener("mousemove", move)
    document.addEventListener("mouseenter", enter)
    document.addEventListener("mouseleave", leave)

    const hoverables = document.querySelectorAll("a, button, [data-hoverable]")
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", hoverStart)
      el.addEventListener("mouseleave", hoverEnd)
    })

    return () => {
      document.removeEventListener("mousemove", move)
      document.removeEventListener("mouseenter", enter)
      document.removeEventListener("mouseleave", leave)
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", hoverStart)
        el.removeEventListener("mouseleave", hoverEnd)
      })
    }
  }, [cursorX, cursorY, ringX, ringY])

  if (typeof window === "undefined") return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9999] h-2 w-2 rounded-full bg-amber-400"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      />
      <motion.div
        className="pointer-events-none fixed z-[9998] h-8 w-8 rounded-full border border-amber-400/50"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  )
}
