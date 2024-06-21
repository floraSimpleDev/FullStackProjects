import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import waiting_purple from "../assets/waiting_purple.svg";
import { useAppContext } from "../contexts/AppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  //import the showToast function
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({ message: "Sign in Successful!", type: "SUCCESS" });
      //update the validate token state to keep up at the newest situation
      await queryClient.invalidateQueries("validateToken");

      navigate(location.state?.from?.pathname || "/");
      //1. show the successful toast; 2. navigate to the home page
    },
    onError: (error: Error) => {
      //show the error toast
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <section className="flex justify-between items-center md:flex-col-reverse">
      <figure className="w-1/3 md:w-4/5 sm:hidden">
        <img src={waiting_purple} alt="loging page figure" className="w-full" />
      </figure>
      <form className="flex flex-col gap-5 w-1/2 sm:w-full" onSubmit={onSubmit}>
        <h2 className="text-3xl font-bold md:font-normal sm:text-sm sm:font-normal">
          Sign In
        </h2>
        <label
          htmlFor="email"
          className="text-gray-700 text-sm font-bold flex-1  md:font-normal sm:text-sm sm:font-normal"
        >
          Email
          <input
            type="email"
            className="border rounded w-full py-1 px-2 font-normal"
            autoComplete="off"
            id="email"
            {...register("email", { required: "This field is required" })}
          />
          {errors.email && (
            <span className="text-red-400">{errors.email.message}</span>
          )}
        </label>

        <label
          htmlFor="password"
          className="text-gray-700 text-sm font-bold flex-1  md:font-normal sm:text-sm sm:font-normal"
        >
          Password
          <input
            className="border rounded w-full py-1 px-2 font-normal"
            type="password"
            autoComplete="off"
            id="password"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-400">{errors.password.message}</span>
          )}
        </label>

        <section className="flex justify-between items-center">
          <span className="text-sm">
            Not Registered?{" "}
            <Link to="/register" className="underline">
              Create an account here
            </Link>
          </span>
          <button
            type="submit"
            className="bg-[#493e99] text-[#f09d7c] p-3 font-bold text-lg rounded-xl hover:bg-[#f09d7c] hover:text-[#493e99] transition"
          >
            Login
          </button>
        </section>
      </form>
    </section>
  );
};

export default SignIn;
