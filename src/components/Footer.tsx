import logo from "../images/logo.svg";
import location from "../images/icon-location.svg";
import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";
import { FacebookLogo, TwitterLogo, InstagramLogo } from "phosphor-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1524] px-10 py-12">
      <img src={logo} className="h-8" alt="" />
      <div className="flex flex-col gap-4 mt-9 text-sm">
        <div className="flex gap-4">
          <img className="self-start" src={location} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="flex gap-4">
          <img src={phone} alt="" className="self-start" />
          <p>+1-543-123-4567</p>
        </div>
        <div className="flex gap-4">
          <img src={email} alt="" className="self-start" />
          <p>example@fylo.com</p>
        </div>
      </div>
      <div className="flex gap-6 flex-col mt-14 text-sm">
        <ul className="flex flex-col gap-1">
          <li>About</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </ul>
        <ul className="flex flex-col gap-1">
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
      </div>
      <div className="flex justify-center gap-2 mt-10">
        <FacebookLogo
          color="white"
          weight="light"
          size={32}
          className="cursor-pointer"
        />
        <TwitterLogo
          color="white"
          weight="light"
          size={32}
          className="cursor-pointer"
        />
        <InstagramLogo
          color="white"
          weight="light"
          size={32}
          className="cursor-pointer"
        />
      </div>
    </footer>
  );
};

export default Footer;
