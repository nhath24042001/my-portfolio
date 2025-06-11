import Contact from "@/components/section/Contact";
import Experience from "@/components/section/Experience";
import Hero from "@/components/section/Hero";
import Project from "@/components/section/Project";
import TechStack from "@/components/section/TechStack";

export default function Home() {
  return (
    <main className="text-white">
      <Hero />
      <TechStack />
      <Project />
      <Experience />
      <Contact />
    </main>
  )
}