import {
  ContainerStyle,
  WrapperStyle,
  LeftStyle,
  TitleStyle,
  InfoItemStyle,
  ContainerInfoStyle,
  InfoWayStyle,
} from "../../styles/footer/contact.style";
import { EmailRounded } from "@mui/icons-material";

const Contact = () => {
  return (
    <>
      <ContainerStyle id="contact">
        <WrapperStyle>
          <LeftStyle>
            <TitleStyle>contact with me ...</TitleStyle>
            <ContainerInfoStyle>
              <InfoItemStyle>
                <EmailRounded />
                <InfoWayStyle>aliamer19ali@gmail.com</InfoWayStyle>
              </InfoItemStyle>
            </ContainerInfoStyle>
          </LeftStyle>
        </WrapperStyle>
      </ContainerStyle>
    </>
  );
};

export default Contact;
