import {
  BrowserStyle,
  CardDescriptionStyle,
  CircleStyle,
  ContainerStyle,
  CardContainterStyle,
  CardWrapperStyle,
  CardImageStyle,
  CardOverlayStyle,
  CardHeaderStyle,
  CardLogoStyle,
  CardHeaderTextStyle,
  CardHeaderTitleStyle,
  OtherInfoStyle,
  CardsContentStyle,
} from "../../../styles/contents/project.style";
import { Project } from "../../../Types/types";

const SingleProject = ({ project }: { project: Project }) => {
  return (
    <ContainerStyle>
      <BrowserStyle>
        <CircleStyle></CircleStyle>
        <CircleStyle></CircleStyle>
        <CircleStyle></CircleStyle>
      </BrowserStyle>
      <CardsContentStyle>
        <CardContainterStyle>
          <CardWrapperStyle
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            <CardImageStyle src={project.img} alt="project photo" />
            <CardOverlayStyle>
              <CardHeaderStyle>
                <CardLogoStyle src={project.language} alt="language" />
                <CardHeaderTextStyle>
                  <CardHeaderTitleStyle>{project.name}</CardHeaderTitleStyle>
                  <CardDescriptionStyle>
                    {project.description}
                  </CardDescriptionStyle>
                </CardHeaderTextStyle>
              </CardHeaderStyle>
              <OtherInfoStyle>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                    padding: "3px",
                  }}
                >
                  {project.techUsedFrontend ? (
                    <ul
                      style={{ padding: "0", margin: "0", marginBottom: "2px" }}
                    >
                      <p style={{ marginTop: "2px", marginBottom: "4px" }}>
                        I used for Frontend :
                      </p>
                      {project.techUsedFrontend?.map((tech) => (
                        <div
                          key={tech}
                          style={{
                            display: "flex",
                            marginLeft: "22px",
                            fontSize: "0.8em",
                          }}
                        >
                          <li>{tech}</li>
                        </div>
                      ))}
                    </ul>
                  ) : null}
                  {project.techUsedBackend ? (
                    <ul
                      style={{ padding: "0", margin: "0", marginBottom: "5px" }}
                    >
                      <p style={{ marginTop: "2px", marginBottom: "4px" }}>
                        I used for Backend :
                      </p>
                      {project.techUsedBackend?.map((tech) => (
                        <div
                          key={tech}
                          style={{
                            display: "flex",
                            marginLeft: "22px",
                            fontSize: "0.8em",
                          }}
                        >
                          <li>{tech}</li>
                        </div>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </OtherInfoStyle>
            </CardOverlayStyle>
          </CardWrapperStyle>
        </CardContainterStyle>
      </CardsContentStyle>
    </ContainerStyle>
  );
};

export default SingleProject;
