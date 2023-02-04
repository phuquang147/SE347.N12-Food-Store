import { Link } from "react-router-dom";

const FooterCopyright = () => {
  return (
    <div className="copyright">
      <div className="footer-logo">
        <Link to="/">
          <img alt="" src="/assets/img/logo.png" />
        </Link>
      </div>
      <p>&copy; {new Date().getFullYear()}</p>
    </div>
  );
};

export default FooterCopyright;
