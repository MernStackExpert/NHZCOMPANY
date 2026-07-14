"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Structure from "@/components/sections/Structure";
import Services from "@/components/sections/Services";
import Partners from "@/components/sections/Partners";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative bg-gray-50 dark:bg-[#0a0a0a] min-h-screen overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Structure />
      <Partners />
      <Contact />
    </main>
  );
}
