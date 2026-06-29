import { Hero } from "@/components/sections/hero";
import { AboutIntro } from "@/components/sections/about-intro";
import { Projects } from "@/components/sections/projects";
import { AboutMe } from "@/components/sections/about-me";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <Projects />
      <AboutMe />
      <Contact />
    </>
  );
}
