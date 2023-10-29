import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Service from "@/components/Service";
import Speciality from "@/components/Speciality";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Service />
      <Testimonial />
      <Speciality />
      <Footer />
    </main>
  );
}
