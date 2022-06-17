import { AppBar, Toolbar } from "@mui/material";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <>
      <AppBar color="default" position="sticky">
        <Toolbar>
          <Logo />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
