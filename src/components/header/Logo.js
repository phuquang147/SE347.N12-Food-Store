import { Link } from "react-router-dom";
import logo from "~/assets/images/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img alt="" src={logo} />
      </Link>
    </div>
  );
};

export default Logo;
