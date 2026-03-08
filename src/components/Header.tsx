import { useScrollSpy } from '../hooks/use-scroll-spy';

const sectionIds = ["about", "programming-skills", "recent-projects", "capstone-projects", "contact"] as const;

const Header = () => {
  const { activeId, handleNavClick } = useScrollSpy(sectionIds);

  return (
    <>
      <header>
        <span className="image avatar"><img src="images/avatar.jpg" alt="" /></span>
        <h1 id="logo"><a href="#">Seung Park</a></h1>
        <p>Software Engineer<br />
          New York, NY</p>
      </header>
      <nav id="nav">
        <ul>
          <li><a href="#about" className={activeId === "about" ? "active" : ""} onClick={() => handleNavClick("about")}>About Me</a></li>
          <li><a href="#programming-skills" className={activeId === "programming-skills" ? "active" : ""} onClick={() => handleNavClick("programming-skills")}>Programming Skills</a></li>
          <li><a href="#recent-projects" className={activeId === "recent-projects" ? "active" : ""} onClick={() => handleNavClick("recent-projects")}>Recent Projects</a></li>
          <li><a href="#capstone-projects" className={activeId === "capstone-projects" ? "active" : ""} onClick={() => handleNavClick("capstone-projects")}>Capstone Projects</a></li>
          <li><a href="#contact" className={activeId === "contact" ? "active" : ""} onClick={() => handleNavClick("contact")}>Contact</a></li>
        </ul>
      </nav>
      <footer>
        <ul className="icons">
          <li><a href="https://www.linkedin.com/in/seungpark222" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
          <li><a href="https://www.github.com/seungpark" className="icon fa-github"><span className="label">Github</span></a></li>
          <li><a href="mailto:seungpark222@google.com?Subject=Software Developer" className="icon fa-envelope"><span className="label">Email</span></a></li>
        </ul>
      </footer>
    </>
  )
}

export default Header;