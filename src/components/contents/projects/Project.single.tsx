import { Typography } from "@mui/material";
import {
  BrowserStyle,
  CardContentStyle,
  CircleStyle,
  ContainerStyle,
  ImageStyle,
} from "../../../styles/contents/project.style";
interface ProjectType {
  img: string;
  link: string;
  name: string;
  description: string;
}

const Project = ({ img, link, name, description }: ProjectType) => {
  return (
    <ContainerStyle>
      <BrowserStyle>
        <CircleStyle></CircleStyle>
        <CircleStyle></CircleStyle>
        <CircleStyle></CircleStyle>
      </BrowserStyle>
      <a href={link} target="_blank" rel="noreferrer">
        <ImageStyle src={img} alt="image" />
      </a>
      <CardContentStyle>
        <Typography gutterBottom variant="h5" component="div" marginX="10px">
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          component="div"
          marginX="10px"
        >
          {description}
        </Typography>
      </CardContentStyle>
    </ContainerStyle>
  );
};

export default Project;
