"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Span } from "next/dist/trace";

// type FormInput = {
//   name: string;
//   email: string;
//   username: string;
//   password: string;
//   confirmPassword: string;
// };

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name:</label>
      <input type="text" {...register("name")} />
      {errors.name && <span>{errors.name.message}</span>}
      <label>Email:</label>
      <input type="text" {...register("email")} />
      {errors.email && <span>{errors.email.message}</span>}
      <label>Username:</label>
      <input type="text" {...register("username")} />
      {errors.username && <span>{errors.username.message}</span>}
      <label>Password:</label>
      <input type="password" {...register("password")} />
      {errors.password && <span>{errors.password.message}</span>}
      <label>Confirm Password:</label>
      <input type="password" {...register("confirmPassword")} />
      {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      <button>Register</button>
    </form>
  );
}

export default MyForm;
