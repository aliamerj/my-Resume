import { myPrjects } from "../../../_DATA_/projects";
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
            I've worked on many projects, but I chose these specific projects
            that reflect my work experience and capability. I tried to make each
            project uses a different technology or a different implementation.
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
        {myPrjects.map((project) => (
          <SingleProject key={project.id} project={project} />
        ))}
      </ListStyle>
    </ContainerStyle>
  );
};

export default Projects;
