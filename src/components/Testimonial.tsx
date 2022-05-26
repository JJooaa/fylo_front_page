interface Props {
  text: string;
  image: string;
  name: string;
  title: string;
}

const Testimonial = ({ text, image, name, title }: Props) => {
  return (
    <div className="bg-[#202A3C] mx-auto w-full max-w-[360px] min-h-[160px] rounded-[4px] px-5 py-6 flex flex-col justify-between">
      <blockquote className="text-xs">{text}</blockquote>
      <div className="flex items-center gap-3">
        <img
          src={image}
          className="rounded-full h-[26px]"
          alt={`image of ${name}`}
        />
        <div>
          <h4 className="text-xs font-bold">{name}</h4>
          <p className="text-[10px]">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
