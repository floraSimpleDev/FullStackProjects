import { FaUniversalAccess } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10">
      <menu className="container mx-auto px-40 flex justify-between items-center">
        <li className="text-3xl text-[#493e99] font-bold flex items-center gap-2">
          <FaUniversalAccess />
          Azure Heaven
        </li>
        <li className="text-[#493e99] font-bold flex gap-6">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </li>
      </menu>
    </footer>
  );
};

export default Footer;
