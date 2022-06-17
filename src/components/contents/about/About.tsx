import {
  AwardDescriptionStyle,
  AwardImageStyle,
  AwardStyle,
  AwardTextsStyle,
  AwardTitle,
  CardStyle,
  ContainerStyle,
  DescriptionStyle,
  ImageStyle,
  LeftStyle,
  RightStyle,
  SubTitleStyle,
  TitleStyle,
} from "../../../styles/contents/about.style";
import devPhoto from "../../../image/Devloper.jpg";

const About = () => {
  return (
    <ContainerStyle>
      <LeftStyle>
        <CardStyle>
          <ImageStyle src={devPhoto} />
        </CardStyle>
      </LeftStyle>
      <RightStyle>
        <TitleStyle>About Me</TitleStyle>
        <SubTitleStyle>
          It is a long established fact that a reader will be distracted by the
          readable content.
        </SubTitleStyle>
        <DescriptionStyle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </DescriptionStyle>
        <AwardStyle>
          <AwardImageStyle src="" alt="award style" />
          <AwardTextsStyle>
            <AwardTitle>International Design Awards 2021</AwardTitle>
            <AwardDescriptionStyle>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </AwardDescriptionStyle>
          </AwardTextsStyle>
        </AwardStyle>
      </RightStyle>
    </ContainerStyle>
  );
};

export default About;
