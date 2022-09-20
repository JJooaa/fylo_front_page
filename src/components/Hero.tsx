import heroImage from "../images/illustration-intro.png";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="hero" className="mt-10 max-w-[720px] mx-auto">
      <img
        className="w-2/3 mx-auto"
        src={heroImage}
        alt="two cartoon characters playing with paper documents"
      />
      <h1 className="mt-8 text-2xl font-bold text-center md:text-[2.5rem] md:leading-[60px]">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="text-center text-sm mt-4 md:text-xl max-w-[596px] mx-auto mb-8">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <Button text="Get Started" />
    </section>
  );
};

export default Hero;
