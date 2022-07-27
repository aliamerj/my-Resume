import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { mySkills } from "../../../_DATA_/skillsAndTech";
import {
  ImageSkillStyle,
  SkillName,
  SkillsContainer,
  SkillsWrapper,
  SkillTitle,
} from "../../../styles/contents/skillAndTech.style";

const SkillAndTech = () => {
  return (
    <div style={{ border: "1px solid", marginBottom: "auto" }}>
      <Accordion>
        <AccordionSummary
          sx={{
            backgroundColor: "#2e7d32",
            color: "#fff",
          }}
        >
          <SkillTitle>
            <i>Click Here</i>
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
    </div>
  );
};

export default SkillAndTech;
