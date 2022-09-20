interface Props {
  paragraph: string;
  title: string;
  image: string;
}

const Benefit = ({ paragraph, title, image }: Props) => {
  return (
    <div className="flex flex-col items-center text-center max-w-[349px]">
      <img src={image} alt="title" />
      <h2 className="mt-8 font-bold text-xl">{title}</h2>
      <p className="mt-4 text-sm">{paragraph}</p>
    </div>
  );
};

export default Benefit;
