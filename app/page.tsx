import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import GitHubActivity from "./components/GitHubActivity"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import ResumeSection from "./components/ResumeSection"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GitHubActivity />
      <Blog />
      <Contact />
      <ResumeSection />
    </>
  )
}
