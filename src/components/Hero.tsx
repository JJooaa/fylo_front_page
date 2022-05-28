import heroImage from "../images/illustration-intro.png";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="hero" className="mt-10">
      <img
        src={heroImage}
        alt="two cartoon characters playing with paper documents"
      />
      <h1 className="mt-8 text-2xl font-bold text-center ">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="text-center text-sm mt-4">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <Button text="Get Started" />
    </section>
  );
};

export default Hero;
