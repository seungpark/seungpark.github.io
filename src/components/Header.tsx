import { useState, useEffect, useRef } from 'react';

import { useScrollPosition } from '../hooks/use-scroll-position';

const sectionIds = ["about", "programming-skills", "recent-projects", "capstone-projects", "contact"] as const;

const Header = () => {
  const [activeId, setActiveId] = useState<typeof sectionIds[number]>("about");
  const [lockedId, setLockedId] = useState<typeof sectionIds[number] | null>(null);
  const ignoreNextScrollRef = useRef(false);


  const { topY } = useScrollPosition();

  useEffect(() => {
    if (lockedId) return;


    const scrollBottom = window.scrollY + window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const bottomThreshold = 2;

    if (scrollBottom >= docHeight - bottomThreshold) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveId(sectionIds[sectionIds.length - 1]);
      return;
    }

    const anchorY = 120;

    let bestId: typeof sectionIds[number] = sectionIds[0];
    let bestScore = Infinity;

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;

      const top = el.getBoundingClientRect().top;
      const score = Math.abs(top - anchorY);

      if (score < bestScore) {
        bestScore = score;
        bestId = id;
      }
    }

    setActiveId(bestId);
  }, [topY, lockedId]);

  useEffect(() => {
    function onScroll() {
      if (!lockedId) return;

      // Ignore the browser-generated scroll caused by clicking the anchor.
      if (ignoreNextScrollRef.current) {
        ignoreNextScrollRef.current = false;
        return;
      }

      // First real user scroll after the click unlocks auto-highlighting.
      setLockedId(null);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lockedId]);

  function handleNavClick(id: typeof sectionIds[number]) {
    ignoreNextScrollRef.current = true;
    setLockedId(id);
    setActiveId(id);
  }

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