const Button = ({ text }: { text: string }) => {
  return (
    <button className="mt-8 block rounded-3xl w-60 font-semibold h-12 bg-gradient-to-b from-[#63E1D9] to-[#34A0CD] mx-auto">
      {text}
    </button>
  );
};

export default Button;
