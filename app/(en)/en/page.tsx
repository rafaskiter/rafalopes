import { Hero } from "@/components/sections/hero";
import { AboutIntro } from "@/components/sections/about-intro";
import { Projects } from "@/components/sections/projects";
import { Collabs } from "@/components/sections/collabs";
import { AboutMe } from "@/components/sections/about-me";
import { Contact } from "@/components/sections/contact";

export default function EnHomePage() {
  return (
    <>
      <Hero locale="en" />
      <AboutIntro locale="en" />
      <Projects locale="en" />
      <Collabs locale="en" />
      <AboutMe locale="en" />
      <Contact locale="en" />
    </>
  );
}
