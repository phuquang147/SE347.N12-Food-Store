import { Link } from "react-router-dom";
import logo from "~/assets/images/logo.png";

const FooterCopyright = () => {
  return (
    <div className="copyright">
      <div className="footer-logo">
        <Link to="/">
          <img alt="" src={logo} />
        </Link>
      </div>
      <p>&copy; {new Date().getFullYear()}</p>
    </div>
  );
};

export default FooterCopyright;
