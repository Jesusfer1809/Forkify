import Head from "next/head";
import Navbar from "components/sections/Navbar";
import Hero from "components/sections/Hero";
import Features from "components/sections/Features";
import Steps from "components/sections/Steps";
import Meals from "components/sections/Meals";
import Testimonials from "components/sections/Testimonials";
import Pricing from "components/sections/Pricing";
import Contact from "components/sections/Contact";
import Footer from "components/sections/Footer";

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
