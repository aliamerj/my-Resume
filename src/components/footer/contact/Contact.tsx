import { useRef, useState } from "react";
import {
  ContainerStyle,
  WrapperStyle,
  LeftStyle,
  TitleStyle,
  InfoItemStyle,
  ContainerInfoStyle,
  RightStyle,
  DescriptionStyle,
  FormStyle,
  InputStyle,
  TextareaStyle,
  ButtonStyle,
  IconInfoItemStyle,
  InfoWayStyle,
} from "../../../styles/footer/contact.style";
import emailjs from "emailjs-com";
import { EmailRounded } from "@mui/icons-material";
import { Alert, AlertTitle } from "@mui/material";

const Contact = () => {
  const formRef = useRef() as React.LegacyRef<HTMLFormElement>;
  const [done, setDone] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0278jhs",
        "template_azrke0s",
        e.target,
        `M3PNytkF0RPjKCPL5`
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <ContainerStyle>
        <WrapperStyle>
          <LeftStyle>
            <TitleStyle>contact with me ....</TitleStyle>
            <ContainerInfoStyle>
              <InfoItemStyle>
                <EmailRounded />
                <InfoWayStyle>aliamer19ali@gmail.com</InfoWayStyle>
              </InfoItemStyle>
            </ContainerInfoStyle>
          </LeftStyle>
          <RightStyle>
            <DescriptionStyle>
              {" "}
              Always available for job offers if the right job comes along. me.
            </DescriptionStyle>

            <FormStyle ref={formRef} onSubmit={handleSubmit}>
              {done ? (
                <Alert severity="success">
                  <AlertTitle>Success</AlertTitle>
                  Thank you very much for contacting with me —{" "}
                  <strong>I'll check it out as soon as possible !</strong>
                </Alert>
              ) : null}
              <InputStyle type="text" placeholder="Name" name="user_name" />
              <InputStyle
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
              <InputStyle type="text" placeholder="Email" name="user_email" />
              <TextareaStyle rows={5} placeholder="Message" name="message" />
              <ButtonStyle type="submit" value="Send">
                Submit
              </ButtonStyle>
            </FormStyle>
          </RightStyle>
        </WrapperStyle>
      </ContainerStyle>
    </>
  );
};

export default Contact;
