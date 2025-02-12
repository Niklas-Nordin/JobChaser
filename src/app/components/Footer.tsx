function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-line"></div>
      <p className="footer-text">© {date} Niklas JobChaser App</p>
    </footer>
  );
}

export default Footer;
