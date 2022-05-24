import logo from "./images/logo.svg";
import heroImage from "./images/illustration-intro.png";
import bgCurvyMobile from "./images/bg-curvy-mobile.svg";
import Button from "./components/Button";

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
      <img
        src={heroImage}
        alt="two cartoon characters playing with paper documents"
      />
      <section id="hero" className="">
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
    </main>
  );
}

export default App;
