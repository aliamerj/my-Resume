import {
  ContainerStyle,
  DescriptionStyle,
  ImageContainerStyle,
  ImageStyle,
  LeftStyle,
  NameStyle,
  RightStyle,
  TitleItemStyle,
  TitleStyle,
  TitleWrapperStyle,
  WelcomeStyle,
  WrapperLeftStyle,
} from "../../../styles/header/Intro.style";
import Me from "../../../image/me.png";

const Intro = () => {
  return (
    <div>
      <ContainerStyle>
        <LeftStyle>
          <WrapperLeftStyle>
            <WelcomeStyle>Hello, My name is</WelcomeStyle>
            <NameStyle>Ali Amer</NameStyle>
            <TitleStyle>
              <TitleWrapperStyle>
                <TitleItemStyle>
                  <h3>Full Stack Web Developer</h3>
                </TitleItemStyle>
                <TitleItemStyle>
                  <h3>Software Engineering</h3>
                </TitleItemStyle>
              </TitleWrapperStyle>
            </TitleStyle>
            <DescriptionStyle>
              I can design and develop any type of websites you ask for , modern
              websites, web services and online stores. And all my websites are
              fast , responsible, maintainable.
            </DescriptionStyle>
          </WrapperLeftStyle>
        </LeftStyle>

        <RightStyle>
          <ImageContainerStyle>
            <ImageStyle src={Me} />
          </ImageContainerStyle>
        </RightStyle>
      </ContainerStyle>
    </div>
  );
};

export default Intro;
