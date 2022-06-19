import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import {
  BrowserStyle,
  CardContentStyle,
  CardDescriptionStyle,
  CircleStyle,
  ContainerStyle,
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
      <Card>
        <CardActionArea
          onClick={() => (link !== "#" ? window.open(link, "_blank") : null)}
        >
          <CardMedia
            component="img"
            height="45%"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <CardContentStyle>
              <Typography variant="h4" component="h4">
                {name}
              </Typography>
            </CardContentStyle>
            <CardDescriptionStyle>
              <Typography
                gutterBottom
                variant="caption"
                component="p"
                fontSize="115%"
              >
                {description}
              </Typography>
            </CardDescriptionStyle>
          </CardContent>
        </CardActionArea>
      </Card>
    </ContainerStyle>
  );
};

export default Project;
