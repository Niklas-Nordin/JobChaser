import Navbar from "./Navbar";
import "../css/header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo-navbar">
        <h1 className="h1">The JobChaser</h1>
        <Navbar />
      </div>
      <div className="lines">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        <div className="line4"></div>
        <div className="line5"></div>
        <div className="line6"></div>
        <div className="line7"></div>
      </div>
    </div>
  );
}

export default Header;
