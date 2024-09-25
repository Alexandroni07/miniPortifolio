import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} TechForge. Todos os direitos
          reservados reservados.
        </p>
        <ul className="footer-links">
          <li>
            <a href="https://github.com/Alexandroni07" target="_blank">
              Sobre
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/gabriel-alexandroni/"
              target="_blank"
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
