import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="w-full h-6 flex items-center justify-between">
      <img src={logo} className="h-full" alt="fylo logo" />
      <nav>
        <ul className="flex max-w-xs gap-6 text-xs">
          <li>Features</li>
          <li>Team</li>
          <li>Sign In</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
