import { Typography } from "@mui/material";
import {
  BrowserStyle,
  CardContentStyle,
  CircleStyle,
  ContainerStyle,
  ImageStyle,
} from "../../../styles/contents/project.style";

const Project = ({ image, link }: { image: string; link: string }) => {
  return (
    <ContainerStyle>
      <BrowserStyle>
        <CircleStyle></CircleStyle>
        <CircleStyle></CircleStyle>
        <CircleStyle></CircleStyle>
      </BrowserStyle>
      <a href={link} target="_blank" rel="noreferrer">
        <ImageStyle src={image} alt="image" />
      </a>
      <CardContentStyle>
        <Typography gutterBottom variant="h5" component="div" marginX="10px">
          Lizard
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          component="div"
          marginX="10px"
        >
          Lizards| are a widespread group of squamate reptiles
        </Typography>
      </CardContentStyle>
    </ContainerStyle>
  );
};

export default Project;
