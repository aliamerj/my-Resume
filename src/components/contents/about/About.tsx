import {
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
import { aboutMe } from "../../../fakeDATA/aboutMe";

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
        <SubTitleStyle>{aboutMe.subTitle}</SubTitleStyle>
        <DescriptionStyle>{aboutMe.story}</DescriptionStyle>
      </RightStyle>
    </ContainerStyle>
  );
};

export default About;
