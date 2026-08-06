import Navbar from "../../components/home/Navbar";
import Hero from "../../components/home/Hero";
import DashboardPreview from "../../components/home/DashboardPreview";
import Features from "../../components/home/Features";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DashboardPreview />
      <Features />

      <section className="bg-green-600 py-20 text-center text-white">
        <h2 className="text-4xl font-bold">
          Start Your Fitness Journey Today
        </h2>

        <p className="mt-4 text-lg text-green-100">
          Track your nutrition, achieve your goals and build healthy habits.
        </p>

        <a
          href="/register"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-green-600 transition hover:bg-green-100"
        >
          Get Started Free
        </a>
      </section>

      <footer className="bg-slate-900 py-8 text-center text-slate-400">
        © 2026 FitMeal. Built with React, Node.js, Express & MongoDB.
      </footer>
    </>
  );
}

export default Home;