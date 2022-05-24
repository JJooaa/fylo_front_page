import Button from "./Button";

const EarlyAccess = () => {
  return (
    <div>
      <h2>Get early access today</h2>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <input
        className="rounded-3xl bg-white text-black"
        type="text"
        placeholder="email@example.com"
      />
      <Button text="Get Started For Free" />
    </div>
  );
};

export default EarlyAccess;
