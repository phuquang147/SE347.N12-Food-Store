import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img alt="" src="/assets/img/logo.png" />
      </Link>
    </div>
  );
};

export default Logo;
