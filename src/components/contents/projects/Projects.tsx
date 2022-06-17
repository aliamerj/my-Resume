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
        <TitleStyle>Create & inspire. It's Lama</TitleStyle>
        <DescriptionStyle>
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
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
