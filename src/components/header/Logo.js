import { Link } from "react-router-dom";

const Logo = ({ type }) => {
  let img;
  switch (type) {
    case "horizontal":
      img = "/assets/img/logo-horizontal.png";
      break;
    case "vertical":
      img = "/assets/img/logo-vertical.png";
      break;
    case "tet":
      img = "/assets/img/logo-horizontal-lnn.png";
      break;
    default:
      img = "/assets/img/logo.png";
  }

  return (
    <div className="logo">
      <Link to="/">
        <img alt="" src={img} />
      </Link>
    </div>
  );
};

export default Logo;
