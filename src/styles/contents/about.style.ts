import { styled } from "@mui/material/styles";

export const ContainerStyle = styled("div")(({ theme }) => ({
  marginTop: "3%",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    marginTop: "50px",
  },
}));
export const LeftStyle = styled("div")(({ theme }) => ({
  flex: 0.5,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
export const CardContainerStyle = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50px",
  left: "50px",
  height: "100%",
  backgroundColor: "#333",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const CardStyle = styled("div")(({ theme }) => ({
  width: "60%",
  height: "70hv",
  borderRadius: "30px",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    height: "30hv",
  },
}));
export const ImageStyle = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

export const RightStyle = styled("div")(({ theme }) => ({
  flex: 1,
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
}));
export const TitleStyle = styled("h1")(() => ({
  fontWeight: "400",
}));
export const SubTitleStyle = styled("p")(() => ({
  margin: "20px 0px",
}));
export const DescriptionStyle = styled("p")(() => ({
  fontSize: "20px",
}));
export const AwardImageStyle = styled("img")(() => ({
  width: "120px",
  height: "120px",
  borderRadius: "20px",
}));
export const AwardStyle = styled("div")(({ theme }) => ({
  margin: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
export const AwardTextsStyle = styled("div")(() => ({
  width: "70%",
}));
export const AwardTitle = styled("h4")(() => ({
  fontWeight: "bold",
  color: "#555",
  marginBottom: "10px",
}));
export const AwardDescriptionStyle = styled("div")(() => ({}));
