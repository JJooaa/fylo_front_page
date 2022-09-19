import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="w-full h-6 flex items-center justify-between">
      <img src={logo} className="h-full" alt="fylo logo" />
      <nav>
        <ul className="flex max-w-xs gap-6 text-xs">
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
