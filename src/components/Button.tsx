const Button = ({ text }: { text: string }) => {
  return (
    <button className="rounded-3xl py-5 w-fit px-10 flex justify-center items-center font-semibold h-12 bg-gradient-to-b from-[#63E1D9] to-[#34A0CD] mx-auto">
      {text}
    </button>
  );
};

export default Button;
