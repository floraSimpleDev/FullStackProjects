import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const { showToast } = useAppContext();

  //react hook form
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  //handle modify api-client.register
  const mutation = useMutation(apiClient.register, {
    onSuccess: () => {
      showToast({ message: "Registration Success!", type: "SUCCESS" });
      /* console.log("registration succesful!"); */
    },
    //responseBody.message, !response.ok error of api-client.ts
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
      /* console.log(error.message); */
    },
  });

  //pass data to mutation function
  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  //md:flex-row for mobile screen
  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold md:font-normal sm:text-sm sm:font-normal">
        Create an Account
      </h2>
      <section className="flex flex-row md:flex-col sm:flex-col gap-5">
        <label
          htmlFor="firstName"
          className="text-gray-700 text-sm font-bold flex-1  md:font-normal sm:text-sm sm:font-normal"
        >
          First Name
          <input
            className="border rounded w-full py-1 px-2 font-normal"
            type="text"
            autoComplete="off"
            id="firstName"
            {...register("firstName", {
              required: "This field is required",
            })}
          />
          {errors.firstName && (
            <span className="text-red-400">{errors.firstName.message}</span>
          )}
        </label>

        <label
          htmlFor="lastName"
          className="text-gray-700 text-sm font-bold flex-1  md:font-normal sm:text-sm sm:font-normal"
        >
          Last Name
          <input
            className="border rounded w-full py-1 px-2 font-normal"
            type="text"
            autoComplete="off"
            id="lastName"
            {...register("lastName", { required: "This field is required" })}
          />
          {errors.lastName && (
            <span className="text-red-400">{errors.lastName.message}</span>
          )}
        </label>
      </section>

      <label
        htmlFor="email"
        className="text-gray-700 text-sm font-bold flex-1  md:font-normal sm:text-sm sm:font-normal"
      >
        Email
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          type="email"
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

      <label
        htmlFor="confirm-password"
        className="text-gray-700 text-sm font-bold flex-1  md:font-normal sm:text-sm sm:font-normal"
      >
        Confirm Password
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          type="password"
          autoComplete="off"
          id="confirm-password"
          {...register("confirmPassword", {
            validate: (val) => {
              if (!val) {
                return "This field is required";
              } else if (watch("password") !== val) {
                return "Your passwords do not match";
              }
            },
          })}
        />
        {errors.confirmPassword && (
          <span className="text-red-400">{errors.confirmPassword.message}</span>
        )}
      </label>
      <span className="flex justify-end items-center">
        <button
          type="submit"
          className="bg-[#493e99] text-[#f09d7c] p-3 font-bold text-lg rounded-xl hover:bg-[#f09d7c] hover:text-[#493e99] transition"
        >
          Create Account
        </button>
      </span>
    </form>
  );
};

export default Register;
