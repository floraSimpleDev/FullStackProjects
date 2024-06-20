import { RxExit } from "react-icons/rx";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { useQueryClient, useMutation } from "react-query";

const SignOutButton = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();

  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      showToast({ message: "Signed Out!", type: "SUCCESS" });
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center text-[#f09d7c] px-3 font-bold border border-[#f09d7c] rounded-xl hover:bg-[#f09d7c] hover:text-[#493e99] transition"
    >
      <RxExit /> &nbsp; Sign out
    </button>
  );
};

export default SignOutButton;
