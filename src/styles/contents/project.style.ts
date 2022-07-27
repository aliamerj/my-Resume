import { styled } from "@mui/material/styles";
import style from "@emotion/styled/macro";
export const ContainerStyle = styled("div")(({ theme }) => ({
  width: "45%",
  marginTop: "15px",
  marginBottom: "20px",
  ":hover": {
    boxShadow: "-36px -88px 159px -41px rgba(0,0,0,0.48)",
    WebkitBoxShadow: "-36px -88px 159px -41px rgba(0,0,0,0.48)",
    MozBoxShadow: "-36px -88px 159px -41px rgba(0,0,0,0.48)",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const BrowserStyle = styled("div")(() => ({
  boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
  transition: "0.3s",
  height: "20px",
  backgroundColor: "rgb(243, 242, 242)",
  display: "flex",
  alignItems: "center",
  position: "sticky",
  marginBottom: "0px",
  zIndex: 2,
}));
export const CircleStyle = styled("div")(() => ({
  width: "6px",
  height: "6px",
  borderRadius: "50%",
  margin: "3px",
  backgroundColor: "white",
}));

export const CardsContentStyle = style.ul`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 2rem;
padding: 0;
margin-top: 0;
list-style-type: none;`;

export const CardWrapperStyle = styled("a")(() => ({
  position: "relative",
  display: "block",
  borderBottomLeftRadius: "90px",
  overflow: "hidden",
  textDecoration: "none",
}));
export const CardImageStyle = styled("img")(() => ({
  width: "100%",
  height: "70vh",
}));
export const CardOverlayStyle = style.div`
position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;      
  background-color: #fff;      
  transform: translateY(100%);
  transition: .2s ease-in-out;`;

export const CardHeaderStyle = style.div`
position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  border-radius: 90px;    
  background-color: #fff;
  transform: translateY(-100%);
  transition: .2s ease-in-out;`;
export const CardLogoStyle = styled("img")(() => ({
  border: "1px solid",
  margin: "auto",
  flexShrink: 0,
  width: "50px",
  height: "50px",
  borderRadius: "50%",
}));
export const CardHeaderTextStyle = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
}));

export const CardHeaderTitleStyle = styled("h2")(() => ({
  fontSize: "2.3em",
  padding: "auto",
  margin: "0",
  marginLeft: "11px",
  color: "#6A515E",
}));

export const CardDescriptionStyle = styled("p")(() => ({
  fontSize: "1.2em",
  padding: "auto",
  margin: "0",
  color: "#6A515E",
  marginBottom: "0px",
}));
export const OtherInfoStyle = styled("div")(() => ({
  borderTop: "1px solid #6A515E",
  fontSize: "1.3em",
  padding: "auto",
  margin: "0",
  marginTop: "auto",
  paddingLeft: "15%",
  paddingTop: "0px",
  color: "black",
  overflow: "hidden",
  marginBottom: "0px",
}));
export const CardContainterStyle = style.li`
:hover  ${CardOverlayStyle} {
  transform: translateY(0);
  
}
:hover ${CardHeaderStyle} {
  transform: translateY(0);
}
`;
