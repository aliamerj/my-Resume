import { keyframes } from "@emotion/react";
import { styled } from "@mui/material/styles";

export const ContainerStyle = styled("div")(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const LeftStyle = styled("div")(() => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
    height: "100%",
  },
}));
export const WelcomeStyle = styled("h2")(() => ({
  fontSize: "30px",
  fontWeight: "300px",
}));
export const NameStyle = styled("h1")(() => ({
  fontSize: "70px",
}));
export const TitleStyle = styled("div")(() => ({
  height: "50px",
  overflow: "hidden",
}));
export const TitleWrapperStyle = styled("div")(() => ({
  height: "100%",
  animation: `${move} 9s ease-in-out infinite alternate`,
}));
const move = keyframes({
  "from, 25%, 50%,  to": {
    transform: "translate(0,0,0)",
  },
  "25%": {
    transform: "translateY(-50px)",
  },
  "50%": {
    transform: "translateY(-50px)",
  },
});

export const TitleItemStyle = styled("div")(({ theme }) => ({
  height: "50px",
  fontSize: "30px",
  fontWeight: "bold",
  color: "#534340",
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
export const ImageContainerStyle = styled("div")(() => ({
  width: "90%",
  margin: "auto",
  clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 26% 100%, 0 53%, 26% 0)",
}));

export const DescriptionStyle = styled("p")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
