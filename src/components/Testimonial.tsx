interface Props {
  text: string;
  image: string;
  name: string;
  title: string;
}

const Testimonial = ({ text, image, name, title }: Props) => {
  return (
    <div>
      <blockquote>{text}</blockquote>
      <div className="flex">
        <img src={image} alt={`image of ${name}`} />
        <div>
          <h4>{name}</h4>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
