import About from "./about/About";
import CertificationsList from "./certifications/CertificationsList";
import Projects from "./projects/Projects";
import SkillAndTech from "./skills&tech/SkillAndTech";

const Content = () => {
  return (
    <>
      <SkillAndTech />
      <Projects />
      <hr />
      <CertificationsList />
      <About />
    </>
  );
};

export default Content;
