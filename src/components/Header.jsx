import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md py-3 px-6 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-black"><Link to='/'> SkillLink </Link></h1>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-8 items-center">
          <li>
            <Link to="/services" className="text-black font-semibold hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-black font-semibold hover:underline">
              Sign up / Log in
            </Link>
          </li>
          <li>
            <Link to="/workerLogin" className="border border-green-500 text-green-500 py-2 px-4 rounded-full hover:bg-green-100">
              Become a Tasker
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
