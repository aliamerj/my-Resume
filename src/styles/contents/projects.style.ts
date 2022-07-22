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
  width: "65%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
export const TitleStyle = styled("h1")(() => ({
  fontSize: "50px",
  fontWeight: "600px",
}));

export const DescriptionStyle = styled("p")(({ theme }) => ({
  margin: "20px 0px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const ListStyle = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  flexDirection: "row",
}));
