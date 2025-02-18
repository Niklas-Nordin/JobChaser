"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="landing-page-main">
      <p className="looking-for-job">Looking for your next dream job?</p>
      <p className="dive-in">
        Dive right in and find the job, you'r looking for!
      </p>
      <p className="or">Or</p>
      <div className="buttons">
        <Link href="/SignIn">
          <p className="sign-in btns">Sign In</p>
        </Link>
        <Link href="/SignUp">
          <p className="sign-up btns">Sign Up</p>
        </Link>
      </div>
    </main>
  );
}
