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
  },
}));

export const LeftStyle = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    height: "10px",
  },
}));
export const WrapperLeftStyle = styled("div")(({ theme }) => ({
  padding: "50px",
  height: "65%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
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
  height: "50vh",
  overflow: "hidden",
}));
export const TitleWrapperStyle = styled("div")(({ theme }) => ({
  height: "100%",
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

export const TitleItemStyle = styled("div")(({ theme }) => ({
  height: "50px",
  fontSize: "30px",
  fontWeight: "bold",
  color: "MidnightBlue",
  display: "flex",
  alignItems: "center",
}));
export const RightStyle = styled("div")(() => ({
  flex: 1,
  position: "relative",
  width: "80%",
}));
export const ImageStyle = styled("img")(() => ({
  marginTop: "2%",
  width: "100%",
  height: "100%",
  objectFit: "contain",
}));
export const WrapperImageStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    width: "96.5vw",
    paddingRight: "0px",
  },
}));
export const ImageContainerStyle = styled("div")(({ theme }) => ({
  width: "85%",
  margin: "auto",
  clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 26% 100%, 0 53%, 26% 0)",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const DescriptionStyle = styled("p")(({ theme }) => ({
  color: "#373838",
  fontFamily: "fantasy",
  fontStyle: "initial",
  [theme.breakpoints.down("md")]: {
    marginTop: "0px",
  },
}));
