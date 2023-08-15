import { myProjects } from "../../../_DATA_/projects";
import {
  ContainerStyle,
  TextStyle,
  TitleStyle,
  DescriptionStyle,
  ListStyle,
} from "../../../styles/contents/projects.style";
import SingleProject from "./Project.single";

const Projects = () => {
  return (
    <ContainerStyle>
      <TextStyle>
        <TitleStyle>My projects & work experience </TitleStyle>
        <DescriptionStyle>
          <p>
            In my career, I've successfully executed numerous projects, each
            selected to demonstrate the breadth of my expertise and
            adaptability. Each project was deliberately crafted using diverse
            technologies and methodologies to showcase my multifaceted
            capabilities.
          </p>
          <p
            style={{
              fontFamily: "cursive",
              backgroundColor: "#266b29",
              color: "#fff",
            }}
          >
            All these projects, I've built them from scratch.
          </p>
        </DescriptionStyle>
      </TextStyle>
      <ListStyle>
        {myProjects.map((project) => (
          <SingleProject key={project.id} project={project} />
        ))}
      </ListStyle>
    </ContainerStyle>
  );
};

export default Projects;
