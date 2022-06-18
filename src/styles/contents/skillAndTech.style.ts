import { styled } from "@mui/material/styles";
export const SkillsContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  position: "sticky",
  zIndex: 2,
}));

export const ImageSkillStyle = styled("img")(
  ({ widthimage }: { widthimage: string }) => ({
    width: widthimage.includes("&") ? "40px" : "20px",
    height: "20px",
    marginRight: "5px",
  })
);
export const SkillName = styled("h5")(() => ({}));

export const SkillsWrapper = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
}));
export const SkillTitle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    marginLeft: "45%",
  },
}));
