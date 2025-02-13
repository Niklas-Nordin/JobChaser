"use client";
import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar">
      <p className="stick">|</p>
      <Link href="/">
        <p>Home</p>
      </Link>
      <p className="stick">|</p>
      <Link href="/Jobs">
        <p>Jobs</p>
      </Link>
      <p className="stick">|</p>
      <div className="header-buttons">
        <Link href="/SignIn">
          <p className="sign-in">Sign In</p>
        </Link>
        <Link href="/SignUp">
          <p className="sign-up">Sign Up</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
