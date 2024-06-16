import { useForm } from "react-hook-form";

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

  return (
    <form className="flex flex-col gap-5">
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
    </form>
  );
};

export default SignIn;