import { myPrjects } from "../../../_DATA_/projects";
import {
  ContainerStyle,
  TextStyle,
  TitleStyle,
  DescriptionStyle,
  ListStyle,
} from "../../../styles/contents/projects.style";
import Project from "./Project.single";

const Projects = () => {
  return (
    <ContainerStyle>
      <TextStyle>
        <TitleStyle>My projects & work experience </TitleStyle>
        <DescriptionStyle>
          I've worked on many projects, but I chose these specific projects that
          reflect my work experience and capability. I tried to make each
          project uses a different technology or a different implementation
        </DescriptionStyle>
      </TextStyle>
      <ListStyle>
        {myPrjects.map((project) => (
          <Project
            key={project.id}
            img={project.img}
            link={project.link}
            name={project.name}
            description={project.description}
          />
        ))}
      </ListStyle>
    </ContainerStyle>
  );
};

export default Projects;
