import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="w-full h-auto flex items-center justify-between md:px-12 md:pt-6">
      <img src={logo} className="h-6 md:h-8" alt="fylo logo" />
      <nav>
        <ul className="flex max-w-xs gap-6 text-xs md:text-base">
          <li className="cursor-pointer hover:font-bold hover:underline">
            Features
          </li>
          <li className="cursor-pointer hover:font-bold hover:underline">
            Team
          </li>
          <li className="cursor-pointer hover:font-bold hover:underline">
            Sign In
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
