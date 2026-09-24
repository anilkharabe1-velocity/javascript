import { LOGO_PATH } from "../constants/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src= { LOGO_PATH }
        ></img>
      </div>

      <div className="nav-items">
        <ul>
          <li> Home</li>
          <li> About us</li>
          <li> Contact us</li>
          <li> Cart</li>
          <li> Help</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;