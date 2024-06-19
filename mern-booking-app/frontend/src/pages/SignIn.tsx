import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../api-client";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      console.log("user has been signed in");

      //1. show the successful toast; 2. navigate to the home page
    },
    onError: (error: Error) => {
      //show the error toast
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
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

      <span className="flex justify-end items-center">
        <button
          type="submit"
          className="bg-[#493e99] text-[#f09d7c] p-3 font-bold text-lg rounded-xl hover:bg-[#f09d7c] hover:text-[#493e99] transition"
        >
          Login
        </button>
      </span>
    </form>
  );
};

export default SignIn;
