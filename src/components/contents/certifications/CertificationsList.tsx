import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import { myCertificates } from "../../../fakeDATA/myCertificates";
import { CertificateContainer } from "../../../styles/contents/certificates.style";

import {
  TextStyle,
  ContainerStyle,
  TitleStyle,
  DescriptionStyle,
} from "../../../styles/contents/projects.style";
import Certfications from "./Certfications";

const CertificationsList = () => {
  return (
    <>
      <ContainerStyle>
        <TextStyle>
          <TitleStyle>certifications & Courses</TitleStyle>
          <DescriptionStyle>
            Some of the best Courses/certificates that I got during my software
            engineering journey
          </DescriptionStyle>
        </TextStyle>
      </ContainerStyle>

      <Accordion>
        <AccordionSummary
          sx={{
            backgroundColor: "Beige",
          }}
        >
          <Typography component="h2" variant="inherit" marginX="50%">
            👇
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CertificateContainer>
            {myCertificates.map((cert) => (
              <Certfications certificate={cert} />
            ))}
          </CertificateContainer>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default CertificationsList;
