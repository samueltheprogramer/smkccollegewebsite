"use client";

import About from "./sections/About";
import CarouselSection from "./sections/CarouselSection";
import Courses from "./sections/Courses";

export default function Home() {
  return (
    <main className=" ">
      <CarouselSection />
      <About />
      <Courses />
    </main>
  );
}
