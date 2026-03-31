import Navbar from "../components/Navbar/Navbar.tsx";
import ProjectsContent from "../components/ProjectsContent.tsx";
import Footer from "../components/Footer.tsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const Projects = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="projects-page-container">
      <Navbar />
      <ProjectsContent />
      <Footer />
    </div>
  );
};

export default Projects;