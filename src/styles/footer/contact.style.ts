import { styled } from "@mui/material/styles";

export const ContainerStyle = styled("div")(() => ({
  position: "relative",
}));
export const WrapperStyle = styled("div")(({ theme }) => ({
  padding: "50px",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: "0px 50px",
  },
}));
export const LeftStyle = styled("div")(() => ({
  flex: 1,
}));
export const TitleStyle = styled("h1")(({ theme }) => ({
  fontSize: "60px",
  width: "80%",
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
  },
}));
export const ContainerInfoStyle = styled("div")(() => ({}));
export const InfoItemStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: "50px 0px",
  fontWeight: "300",
  width: "70%",
  [theme.breakpoints.down("md")]: {
    margin: "20px 0px",
    width: "100%",
  },
}));
export const IconInfoItemStyle = styled("div")(() => ({
  width: "30px",
  height: "30px",
  marginRight: "20px",
}));
export const InfoWayStyle = styled("h4")(() => ({
  marginLeft: "5px",
}));
