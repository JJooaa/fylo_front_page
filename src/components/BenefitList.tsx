import accessEverywhere from "../images/icon-access-anywhere.svg";
import securityImage from "../images/icon-security.svg";
import collabIcon from "../images/icon-collaboration.svg";
import anyFileIcon from "../images/icon-any-file.svg";
import Benefit from "./Benefit";

const benefitsItems = [
  {
    paragraph:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere",
    title: "Access your files, everywhere",
    image: accessEverywhere,
  },
  {
    paragraph:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files",
    title: "Security you can trust",
    image: securityImage,
  },
  {
    paragraph:
      "Securely shares files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    title: "Real-time collaboration",
    image: collabIcon,
  },
  {
    paragraph:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    title: "Store any type of file",
    image: anyFileIcon,
  },
];

const BenefitList = () => {
  return (
    <>
      {benefitsItems.map((benefit) => (
        <Benefit
          paragraph={benefit.paragraph}
          title={benefit.title}
          image={benefit.image}
        />
      ))}
    </>
  );
};

export default BenefitList;
