import { styled } from "@mui/material/styles";

export const ContainerStyle = styled("div")(({ theme }) => ({
  padding: "50px 100px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  marginBottom: "5%",
  [theme.breakpoints.down("md")]: {
    padding: "10px",
  },
}));

export const TextStyle = styled("div")(({ theme }) => ({
  marginTop: "0px",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
export const TitleStyle = styled("h1")(({ theme }) => ({
  marginTop: "0",
  fontSize: "50px",
  fontFamily: "sans-serif",
  fontStyle: "italic",
  fontWeight: "revert",
  [theme.breakpoints.down("md")]: {
    fontSize: "40px",
  },
}));

export const DescriptionStyle = styled("div")(({ theme }) => ({
  fontSize: "23px",
  fontFamily: "revert-layer",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));

export const ListStyle = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  flexDirection: "row",
}));
