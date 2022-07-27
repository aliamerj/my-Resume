import {
  AlterTextStyle,
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
            <AlterTextStyle>
              <TitleItemStyle>
                <h3>I'm Full Stack Web Developer</h3>
              </TitleItemStyle>
            </AlterTextStyle>
            <DescriptionStyle>
              I can design and develop any type of websites you ask for , modern
              websites, web services.{"\n"} And all my websites are Secure, Fast
              , Responsible, Maintainable.
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
