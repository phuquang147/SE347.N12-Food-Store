import { Link } from "react-router-dom";
import Logo from "~/components/header/Logo";

const FooterCopyright = () => {
  return (
    <div className="copyright">
      <div className="footer-logo">
        <Link to="/">
          <Logo type="vertical" />
        </Link>
      </div>
      <p>&copy; {new Date().getFullYear()}</p>
    </div>
  );
};

export default FooterCopyright;
