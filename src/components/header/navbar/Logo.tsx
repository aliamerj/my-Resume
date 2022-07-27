import logoPhoto from "../../../image/logo.png";
const Logo = () => {
  return (
    <div style={{ marginRight: "auto" }}>
      <a href="/">
        <img src={logoPhoto} alt="logo" width="140px" />
      </a>
    </div>
  );
};

export default Logo;
