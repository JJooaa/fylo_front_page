import profile1 from "../images/profile-1.jpg";
import profile2 from "../images/profile-2.jpg";
import profile3 from "../images/profile-3.jpg";
import Testimonial from "./Testimonial";

const testimonialData = [
  {
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    image: profile1,
    name: "Satish Patel",
    title: "Founder & CEO, Huddle",
  },
  {
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    image: profile2,
    name: "Bruce McKenzie",
    title: "Founder & CEO, Huddle",
  },
  {
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    image: profile3,
    name: "Iva Boyd",
    title: "Founder & CEO, Huddle",
  },
];

const TestimonialList = () => {
  return (
    <section id="customer-testimonials">
      {testimonialData.map((testimony) => (
        <Testimonial
          text={testimony.text}
          image={testimony.image}
          name={testimony.name}
          title={testimony.title}
        />
      ))}
    </section>
  );
};

export default TestimonialList;
