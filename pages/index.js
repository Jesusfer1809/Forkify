import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Steps from "../components/Steps";
import Meals from "../components/Meals";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Omnifood</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" font-rubik">
        <Navbar />

        <Hero />

        <Features />

        <Steps />

        <Meals />

        <Testimonials />
      </div>
    </>
  );
}
