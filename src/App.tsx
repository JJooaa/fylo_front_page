import logo from "./images/logo.svg";
import heroImage from "./images/illustration-intro.png";
import bgCurvyMobile from "./images/bg-curvy-mobile.svg";
import Button from "./components/Button";
import BenefitList from "./components/BenefitList";
import StayProductive from "./components/StayProductive";
import TestimonialList from "./components/TestimonialList";
import EarlyAccess from "./components/EarlyAccess";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="px-5 py-6 bg-[hsl(218, 28%, 13%)]">
      <header className="w-full h-6 flex items-center justify-between">
        <img src={logo} className="h-full" alt="fylo logo" />
        <nav>
          <ul className="flex max-w-xs gap-6 text-xs">
            <li>Features</li>
            <li>Team</li>
            <li>Sign In</li>
          </ul>
        </nav>
      </header>
      <section id="hero" className="">
        <img
          src={heroImage}
          alt="two cartoon characters playing with paper documents"
        />
        <h1 className="mt-8 text-2xl font-bold text-center ">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="text-center text-sm mt-4">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <Button text="Get Started" />
      </section>
      <BenefitList />
      <StayProductive />
      <TestimonialList />
      <EarlyAccess />
      <Footer />
    </main>
  );
}

export default App;
