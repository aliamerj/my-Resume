import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import { myCertificates } from "../../../_DATA_/myCertificates";
import { CertificateContainer } from "../../../styles/contents/certificates.style";

import {
  TextStyle,
  ContainerStyle,
  TitleStyle,
  DescriptionStyle,
} from "../../../styles/contents/projects.style";
import Certfications from "./Certfications";
import { SkillTitle } from "../../../styles/contents/skillAndTech.style";

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
            backgroundColor: "#2e7d32",
            color: "#fff",
          }}
        >
          <SkillTitle>
            <i>Click Here </i>
            <Typography component="h2" variant="inherit">
              Skills & technology
            </Typography>
          </SkillTitle>
        </AccordionSummary>
        <AccordionDetails>
          <CertificateContainer>
            {myCertificates.map((cert) => (
              <Certfications key={cert.id} certificate={cert} />
            ))}
          </CertificateContainer>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default CertificationsList;
