import logo from "../images/logo.svg";
import location from "../images/icon-location.svg";
import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0B1524] ">
      <img src={logo} className="h-8" alt="" />
      <div>
        <div className="flex ">
          <img className="self-start" src={location} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div>
          <img src={phone} alt="" />
          <p>+1-543-123-4567</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
