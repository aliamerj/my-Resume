import About from "../components/contents/about/About";
import CertificationsList from "../components/contents/certifications/CertificationsList";
import Projects from "../components/contents/projects/Projects";
import SkillAndTech from "../components/contents/skills&tech/SkillAndTech";

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
