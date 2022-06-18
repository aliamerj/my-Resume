import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { mySkills } from "../../../fakeDATA/skillsAndTech";
import {
  ImageSkillStyle,
  SkillName,
  SkillsContainer,
  SkillsWrapper,
  SkillTitle,
} from "../../../styles/contents/skillAndTech.style";

const SkillAndTech = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          sx={{
            backgroundColor: "AntiqueWhite",
          }}
        >
          <SkillTitle>
            <Typography component="h2" variant="inherit">
              Skills & technology
            </Typography>
          </SkillTitle>
        </AccordionSummary>
        <AccordionDetails>
          <SkillsWrapper>
            {mySkills.map((skill) => (
              <SkillsContainer key={skill.id}>
                <ImageSkillStyle
                  src={skill.image}
                  alt="logo skill"
                  widthimage={skill.title}
                />
                <SkillName>{skill.title}</SkillName>
              </SkillsContainer>
            ))}
          </SkillsWrapper>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default SkillAndTech;
