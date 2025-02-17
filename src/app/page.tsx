"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="landing-page-main">
      <p className="looking-for-job">Looking for your next dream job?</p>
      <p className="dive-in">Dive in and find the job, you'r looking for!</p>
      <div className="buttons">
        <Link href="/SignIn">
          <p className="sign-in">Sign In</p>
        </Link>
        <p>Or</p>
        <Link href="/SignUp">
          <p className="sign-up">Sign Up</p>
        </Link>
      </div>
    </main>
  );
}
