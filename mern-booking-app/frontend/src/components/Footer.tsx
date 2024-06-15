import { FaUniversalAccess } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10">
      <menu className="container mx-auto px-40 flex justify-between items-center sm:px-20 sm:flex-col">
        <li className="text-3xl text-[#493e99] font-bold flex items-center gap-2 sm:gap-4">
          <FaUniversalAccess />
          Azure Heaven
        </li>
        <li className="text-[#493e99] font-bold flex gap-6 sm:flex-col sm:gap-0">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </li>
      </menu>
    </footer>
  );
};

export default Footer;
