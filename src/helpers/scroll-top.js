import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToTop({ children }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return children || null;
}

export default ScrollToTop;
