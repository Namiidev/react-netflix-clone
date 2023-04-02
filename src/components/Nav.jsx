import { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
    const [show, setShow] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setShow(true);
        } else {
          setShow(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"
        className="nav__logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Avatar"
        className="nav__avatar"
      />
    </div>
  );
}

export default Nav;
