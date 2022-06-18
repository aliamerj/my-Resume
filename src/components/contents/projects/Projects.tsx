import { myPrjects } from "../../../fakeDATA/projects";
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
          reflect my work experience. I tried to make each project uses a
          different technology or a different implementation
        </DescriptionStyle>
      </TextStyle>
      <ListStyle>
        {myPrjects.map((project) => (
          <Project key={project.id} image={project.img} link={project.link} />
        ))}
      </ListStyle>
    </ContainerStyle>
  );
};

export default Projects;
