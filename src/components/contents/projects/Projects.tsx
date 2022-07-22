import { myPrjects } from "../../../_DATA_/projects";
import {
  ContainerStyle,
  TextStyle,
  TitleStyle,
  DescriptionStyle,
  ListStyle,
} from "../../../styles/contents/projects.style";
import SingleProject from "./Project.single";
import { CardsContentStyle } from "../../../styles/contents/project.style";

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
          <SingleProject key={project.id} project={project} />
        ))}
      </ListStyle>
    </ContainerStyle>
  );
};

export default Projects;
