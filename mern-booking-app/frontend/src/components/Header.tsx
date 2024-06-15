import { Link } from "react-router-dom";
import { FaUniversalAccess } from "react-icons/fa";
import { RxEnter } from "react-icons/rx";

const Header = () => {
  return (
    <nav className="bg-[#493e99] py-6">
      <menu className="container mx-auto flex justify-between px-40 sm:px-20 sm:flex-wrap">
        <li className="flex items-center gap-3 text-3xl text-[#f09d7c] font-bold -tracking-tighter cursor-pointer">
          <FaUniversalAccess />
          <Link to="/">Azure Heaven</Link>
        </li>
        <li className="flex space-x-2">
          <Link
            to="/sign-in"
            className="flex items-center text-[#f09d7c] px-3 font-bold border border-[#f09d7c] rounded-xl hover:bg-[#f09d7c] hover:text-[#493e99] transition"
          >
            <RxEnter />
            &nbsp; Sign In
          </Link>
        </li>
      </menu>
    </nav>
  );
};

export default Header;
