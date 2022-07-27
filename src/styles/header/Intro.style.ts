import { keyframes } from "@emotion/react";
import { styled } from "@mui/material/styles";

export const ContainerStyle = styled("div")(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    height: "650px",
    padding: "40px",
  },
}));

export const LeftStyle = styled("div")(({ theme }) => ({
  flex: 1,
  width: "100%",
  height: "100%",
}));
export const WrapperLeftStyle = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  clipPath:
    "polygon(0 0, 100% 0, 100% 20%, 100% 100%, 80% 100%, 20% 100%, 0 100%, 0% 20%)",

  [theme.breakpoints.down("md")]: {
    padding: "10px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "54vh",
  },
}));
export const WelcomeStyle = styled("h2")(() => ({
  fontFamily: "Mochiy Pop One",
  fontSize: "30px",
  fontWeight: "300px",
}));
export const NameStyle = styled("h1")(() => ({
  fontFamily: "Mochiy Pop One",
  fontSize: "60px",
}));
export const TitleStyle = styled("div")(() => ({
  height: "40px",
  overflow: "hidden",
}));
export const TitleWrapperStyle = styled("div")(({ theme }) => ({
  animation: `${move} 9s ease-in-out infinite alternate`,
  [theme.breakpoints.down("md")]: {
    animation: `${moveMobile} 9s ease-in-out infinite alternate`,
    height: "25%",
    marginBottom: "0px",
  },
}));
const move = keyframes({
  "from, 25%, 50%,  to": {
    transform: "translate(0,0,0)",
  },
  "25%": {
    transform: "translateY(8px)",
  },
  "50%": {
    transform: "translateY(-60px)",
  },
});
const moveMobile = keyframes({
  "from, 25%, 50%,  to": {
    transform: "translate(0,0,0)",
  },
  "25%": {
    transform: "translateY(17px)",
  },
  "50%": {
    transform: "translateY(-60px)",
  },
});

export const TitleItemStyle = styled("div")(() => ({
  height: "50px",
  fontSize: "30px",
  fontWeight: "bold",
  color: "MidnightBlue",
  display: "flex",
  alignItems: "center",
}));
export const RightStyle = styled("div")(({ theme }) => ({
  flex: 1,
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
export const ImageStyle = styled("img")(() => ({
  marginTop: "2%",
  width: "100%",
  height: "100%",
  objectFit: "contain",
  margin: "auto",
}));

export const ImageContainerStyle = styled("div")(() => ({
  width: "100%",
  height: "100%",
  clipPath:
    "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
}));

export const DescriptionStyle = styled("p")(({ theme }) => ({
  color: "#373838",
  fontFamily: "inherit",
  fontStyle: "initial",
}));
