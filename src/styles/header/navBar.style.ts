import { styled } from "@mui/material/styles";

export const ButtonContainerStyle = styled("div")(({ theme }) => ({
  fontSize: "20px",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));
