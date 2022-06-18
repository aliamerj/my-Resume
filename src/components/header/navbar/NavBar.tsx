import { GitHub } from "@mui/icons-material";
import { AppBar, Button, Toolbar } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import { ButtonContainerStyle } from "../../../styles/header/navBar.style";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <>
      <AppBar color="default" position="sticky">
        <Toolbar>
          <Logo />
          <Button
            style={{ marginRight: "3%" }}
            onClick={() =>
              window.open("https://github.com/joeamerson", "_blank")
            }
          >
            <GitHub color="secondary" />
          </Button>
          <Button
            variant="contained"
            color="success"
            style={{
              marginRight: "3%",
            }}
          >
            <ButtonContainerStyle>
              <HashLink
                to="#contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                contact US
              </HashLink>
            </ButtonContainerStyle>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
