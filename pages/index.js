import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Steps from "../components/Steps";
import Meals from "../components/Meals";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Omnifood</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" font-rubik p-0  ">
        <Navbar />

        <Hero />

        <Features />

        <Steps />

        <Meals />

        <Testimonials />

        <Pricing />

        <Contact />

        <Footer />
      </div>
    </div>
  );
}
