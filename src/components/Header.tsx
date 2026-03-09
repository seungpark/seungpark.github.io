import { useState } from 'react';
import { useScrollSpy } from '../hooks/use-scroll-spy';

const sectionIds = ["about", "programming-skills", "recent-projects", "capstone-projects", "contact"] as const;

const Header = () => {
  const { activeId, handleNavClick } = useScrollSpy(sectionIds);
  const [darkMode, setDarkMode] = useState(() => {
    return document?.documentElement?.classList.contains('dark') ? true : false;
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newDarkMode = !prev;
      if (typeof document === 'undefined') return newDarkMode; // Ensure document is available
      if (newDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage?.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage?.setItem('theme', 'light');
      }
      return newDarkMode;
    });
  };


  return (
    <>
      <header>
        <span className="image avatar"><img src="images/avatar.jpg" alt="" /></span>
        <h1 id="logo"><a href="#">Seung Park</a></h1>
        <div className="content">
          <p>Software Engineer<br />
            New York, NY</p>
          <button aria-label="Toggle dark mode" className={`fa dark-mode-cta ${darkMode ? "fa-moon" : "fa-sun"}`} onClick={toggleDarkMode}>
          </button>
        </div>
      </header>
      <nav id="nav">
        <ul>
          <li><a aria-label="about" href="#about" className={activeId === "about" ? "active" : ""} onClick={() => handleNavClick("about")}>About Me</a></li>
          <li><a aria-label="programming skills" href="#programming-skills" className={activeId === "programming-skills" ? "active" : ""} onClick={() => handleNavClick("programming-skills")}>Programming Skills</a></li>
          <li><a aria-label="recent projects" href="#recent-projects" className={activeId === "recent-projects" ? "active" : ""} onClick={() => handleNavClick("recent-projects")}>Recent Projects</a></li>
          <li><a aria-label="capstone projects" href="#capstone-projects" className={activeId === "capstone-projects" ? "active" : ""} onClick={() => handleNavClick("capstone-projects")}>Capstone Projects</a></li>
          <li><a aria-label="contact" href="#contact" className={activeId === "contact" ? "active" : ""} onClick={() => handleNavClick("contact")}>Contact</a></li>
        </ul>
      </nav>
      <footer>
        <ul className="icons">
          <li><a aria-label="LinkedIn" href="https://www.linkedin.com/in/seungpark222" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
          <li><a aria-label="GitHub" href="https://www.github.com/seungpark" className="icon fa-github"><span className="label">Github</span></a></li>
          <li><a aria-label="Email" href="mailto:seungpark222@google.com?Subject=Software Developer" className="icon fa-envelope"><span className="label">Email</span></a></li>
        </ul>
      </footer>
    </>
  )
}

export default Header;