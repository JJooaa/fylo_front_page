interface Props {
  paragraph: string;
  title: string;
  image: string;
}

const Benefit = ({ paragraph, title, image }: Props) => {
  return (
    <div>
      <img src={image} alt="title" />
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default Benefit;
