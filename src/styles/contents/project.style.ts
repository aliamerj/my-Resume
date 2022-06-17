import { styled } from "@mui/material/styles";

export const ContainerStyle = styled("div")(({ theme }) => ({
  width: "40%",
  height: "60vh",
  margin: "20px 10px",
  border: "2px solid rgb(243, 242, 242)",
  borderRadius: "10px 10px 0px 0px",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    width: "40%",
    height: "20vh",
  },
}));

export const BrowserStyle = styled("div")(() => ({
  height: "20px",
  backgroundColor: "rgb(243, 242, 242)",
  display: "flex",
  alignItems: "center",
  position: "sticky",
  zIndex: 2,
}));
export const CircleStyle = styled("div")(() => ({
  width: "6px",
  height: "6px",
  borderRadius: "50%",
  margin: "3px",
  backgroundColor: "white",
}));
export const ImageStyle = styled("img")(() => ({
  width: "100%",
  height: "60%",
  transition: "all 10s ease",
  ":hover": {
    transform: "translateY(-100%)",
  },
}));

export const CardContentStyle = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
}));
