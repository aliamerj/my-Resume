import { styled } from "@mui/material/styles";

export const ContainerStyle = styled("div")(() => ({
  height: "100vh",
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

export const RightStyle = styled("div")(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));
export const DescriptionStyle = styled("p")(({ theme }) => ({
  fontWeight: "200",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
export const FormStyle = styled("form")(({ theme }) => ({
  marginTop: "20px",
  [theme.breakpoints.down("md")]: {
    marginTop: "0px",
    display: "flex",
    flexWrap: "wrap",
  },
}));

export const InputStyle = styled("input")(({ theme }) => ({
  width: "50%",
  height: "50px",
  border: "none",
  borderBottom: "1px solid black",
  margin: "10px 0px",
  fontSize: "14px",
  paddingLeft: "10px",
  [theme.breakpoints.down("md")]: {
    width: "35%",
    height: "40px",
    margin: "10px",
    marginLeft: 0,
  },
}));
export const TextareaStyle = styled("textarea")(() => ({
  width: "100%",
  margin: "10px 0px",
  fontSize: "14px",
  paddingLeft: "10px",
}));
export const ButtonStyle = styled("button")(({ theme }) => ({
  border: "none",
  padding: "15px",
  backgroundColor: "#59b256",
  color: "white",
  fontWeight: "500",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    marginTop: "10px",
  },
}));
export const InfoWayStyle = styled("h4")(() => ({
  marginLeft: "5px",
}));
