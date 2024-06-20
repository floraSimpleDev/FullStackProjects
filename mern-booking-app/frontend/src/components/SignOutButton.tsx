import { RxExit } from "react-icons/rx";

const SignOutButton = () => {
  return (
    <button className="flex items-center text-[#f09d7c] px-3 font-bold border border-[#f09d7c] rounded-xl hover:bg-[#f09d7c] hover:text-[#493e99] transition">
      <RxExit /> &nbsp; Sign out
    </button>
  );
};

export default SignOutButton;
