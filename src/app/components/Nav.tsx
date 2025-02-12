"use client";
import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar">
      <Link href="/">
        <p>Home</p>
      </Link>
      <Link href="/Jobs">
        <p>Jobs</p>
      </Link>
      <Link href="/SignIn">
        <p>Sign In</p>
      </Link>
      <Link href="/SignUp">
        <p>Sign Up</p>
      </Link>
    </div>
  );
}

export default Navbar;
