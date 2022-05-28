import Button from "./Button";

const EarlyAccess = () => {
  return (
    <div className="w-full rounded-md bg-[#1B2330] shadow-md mt-40 flex flex-col items-center gap-6 py-10 px-7">
      <h2>Get early access today</h2>
      <p className="text-center">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div className="flex flex-wrap">
        <input
          className="rounded-3xl mx-auto w-full h-12  bg-white text-black"
          type="text"
          placeholder="email@example.com"
        />
        <Button text="Get Started For Free" />
      </div>
    </div>
  );
};

export default EarlyAccess;
