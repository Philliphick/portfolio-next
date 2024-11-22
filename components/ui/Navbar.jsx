// components/Navbar.jsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute top-10 right-10 z-50">
      <ul className="flex flex-row space-x-4 text-2xl lg:space-x-6">
        <li>
          <Link
            href="/About"
            className="bg-gray-800 px-4 py-2 hover:ring-1 hover:ring-gray-400 hover:bg-gray-900 transition-all duration-200"
          >
            About Me
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/Philliphick"
            target="_blank"
            className="bg-gray-800 px-4 py-2 hover:ring-1 hover:ring-gray-400 hover:bg-gray-900 transition-all duration-200"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="/CV_Phillip_Hickinbotham.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 px-4 py-2 hover:ring-1 hover:ring-gray-400 hover:bg-gray-900 transition-all duration-200"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
