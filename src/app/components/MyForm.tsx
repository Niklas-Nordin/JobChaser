"use client";
import "../css/myForm.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";

function MyForm() {
  const formSchema = z
    .object({
      name: z.string().min(3),
      email: z.string().email(),
      username: z.string().min(6).max(20),
      password: z.string().min(6),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    reset();
  };

  const pathname = usePathname();
  const isSignUp = pathname === "/SignUp";

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {isSignUp && (
        <>
          <label>Name:</label>
          <input className="input" type="text" {...register("name")} />
          {errors.name && (
            <span className="error-msg">{errors.name.message}</span>
          )}

          <label>Email:</label>
          <input className="input" type="text" {...register("email")} />
          {errors.email && (
            <span className="error-msg">{errors.email.message}</span>
          )}
        </>
      )}
      <label>Username:</label>
      <input className="input" type="text" {...register("username")} />
      {errors.username && (
        <span className="error-msg">{errors.username.message}</span>
      )}
      <label>Password:</label>
      <input className="input" type="password" {...register("password")} />
      {errors.password && (
        <span className="error-msg">{errors.password.message}</span>
      )}
      {isSignUp && (
        <>
          <label>Confirm Password:</label>
          <input
            className="input"
            type="password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <span className="error-msg">{errors.confirmPassword.message}</span>
          )}
        </>
      )}
      <button className="form-btn sign-in">
        {isSignUp ? "Sign Up" : "Sign In"}
      </button>
    </form>
  );
}

export default MyForm;
