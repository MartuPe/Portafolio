import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Stack } from "./components/Stack";
import { Works } from "./components/works/Works";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Works />
        <Stack />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
