import Image from "next/image";
import {Hero} from "@/components/home/Hero";
import {Companies} from "@/components/home/Compani";
import {About} from "@/components/home/About";
import {Blog} from "@/components/home/Blog";

export default function Home() {
  return (
      <main>
          <Hero />
          <Companies />
          <About />
          <Blog />
      </main>
  );
}
