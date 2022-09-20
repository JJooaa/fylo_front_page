import Button from "./Button";

const EarlyAccess = () => {
  return (
    <div className="w-full mx-auto max-w-[863px] rounded-md bg-[#1B2330] shadow-2xl shadow-black mt-40 flex flex-col items-center gap-6 py-10 px-7">
      <h2 className="text-lg font-bold sm:text-3xl">Get early access today</h2>
      <p className="text-center text-sm max-w-2xl">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div className="flex flex-col w-full justify-center items-center gap-6 md:flex-row md:max-w-[740px]">
        <input
          className="rounded-3xl grow mx-auto h-12 text-center text-sm bg-white text-black"
          type="text"
          placeholder="email@example.com"
        />
        <Button text="Get Started For Free" />
      </div>
    </div>
  );
};

export default EarlyAccess;
