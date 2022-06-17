import { Link } from "react-router-dom";

import logoPhoto from "../../../image/logo.png";
const Logo = () => {
  return (
    <div style={{ marginRight: "auto" }}>
      <Link to="/">
        <img src={logoPhoto} alt="logo" width="140px" />
      </Link>
    </div>
  );
};

export default Logo;
