import './styling/flex.css'
import './styling/theme.css'
import './styling/portfolio.css'
import Header from './components/Header'
import { useEffect } from 'react';

function App() {
  const toggleMenu = () => {
    const body = document.querySelector('body');
    if (body) {
      body.classList.toggle('header-visible');
    }
  }


  // effect to smooth scroll on hash change, e.g. when clicking on anchor links
  useEffect(() => {
    if (typeof window === 'undefined') return;

    function onHashChange() {
      console.log('hash changed');
      const hash = window.location.hash;

      if (!hash) return;

      const id = hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }

    window.addEventListener("hashchange", onHashChange, { passive: true });
    return () => window.removeEventListener("hashchange", onHashChange);


  })

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hash = window.location.hash;

    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>

      <section id="header">
        <Header></Header>
      </section>

      <div id="wrapper">
        <div id="main">

          <section id="about">
            <div className="container">
              <header className="major">
                <h2>About Me</h2>
                <p>New-York based Full Stack Software Engineer <br /></p>
              </header>
              <p>Hi, I'm Seung, a full stack software engineer. With an undergraduate degree in Pure Mathematics and 10+ years of experience delivering scalable and robust solutions for technical problems, I find joy in achieving small metrics to race together towards a common goal.</p>
              <p>Outside of engineering, I enjoy spending time golfing and biking.</p>
            </div>
          </section>

          <section id="programming-skills">
            <div className="container">
              <h3>Programming Skills</h3>
              <div className="flex-container">
                <div className="grid-el"><img src="images/thumbnails/node.png" /><p>NODE</p></div>
                <div className="grid-el"><img src="images/thumbnails/typescript.png" /><p>TYPESCRIPT</p></div>
                <div className="grid-el"><img src="images/thumbnails/javascript.png" /><p>JAVASCRIPT</p></div>
                <div className="grid-el"><img src="images/thumbnails/postgresql.png" /><p>SQL</p></div>
                <div className="grid-el"><img src="images/thumbnails/react.jpg" /><p>REACT</p></div>
                <div className="grid-el"><img src="images/thumbnails/angular.png" /><p>ANGULAR</p></div>
                <div className="grid-el"><img src="images/thumbnails/git.png" /><p>GIT</p></div>
                <div className="grid-el"><img src="images/thumbnails/aws.png" /><p>AWS</p></div>
                <div className="grid-el"><img src="images/thumbnails/python.png" /><p>PYTHON</p></div>
                <div className="grid-el"><img src="images/thumbnails/mongodb.png" /><p>MONGODB</p></div>
                <div className="grid-el"><img src="images/thumbnails/ruby.png" /><p>RUBY</p></div>
                <div className="grid-el"><img src="images/thumbnails/HTML5.png" /><p>HTML5</p></div>
                <div className="grid-el"><img src="images/thumbnails/css.png" /><p>CSS</p></div>
              </div>
            </div>
          </section>

          <section id="recent-projects">
            <div className="container">
              <h3>Recent Projects</h3>
              <div className="features">
                <article>
                  <a href="https://www.mongodb.com/docs/manual/" className="image"><img src="images/project-samples/mongodb-docs.png" alt="" /></a>
                  <div className="inner">
                    <h4><a href="https://www.mongodb.com/docs/manual/">MongoDB Documentation</a></h4>
                    <p>Documentation across all MongoDB services, delivering rich LLM-friendly content with a responsive UX and performant SEO</p>
                    <p>Built with Gatsby and NextJS alongside a custom ReST parser and custom ETL pipelines, deployed through Netlify</p>
                  </div>
                </article>
                <article>
                  <a href="https://www.mongodb.com/docs/api/" className="image"><img src="images/project-samples/mongodb-bump.png" alt="" /></a>
                  <div className="inner">
                    <h4><a href="https://www.mongodb.com/docs/manual/">MongoDB API Documentation powered by Bump.sh</a></h4>
                    <p>API Docs delivering a fast, searchable, and developer-friendly reference experience</p>
                    <p>Designed to keep APIs accurate, discoverable, and easy to explore at scale</p>
                  </div>
                </article>
                <article>
                  <a href="https://app.gro-intelligence.com/login" className="image"><img src="images/project-samples/gro-app.png" alt="" /></a>
                  <div className="inner">
                    <h4><a href="https://app.gro-intelligence.com/login">Gro Web App</a></h4>
                    <p>Full scale application to allow users to explore and visualize 50M+ data sets in different formats of visualization</p>
                    <p><a href="https://app.gro-intelligence.com/displays/wRL71mOqp">Check out this sample display monitoring California's vegetables</a></p>
                  </div>
                </article>
                <article>
                  <a href="https://pypi.org/project/groclient" className="image"><img src="images/project-samples/gro-logo.png" alt="" /></a>
                  <div className="inner">
                    <h4>Gro API Client</h4>
                    <p>A python API Client provides users access to a rich agricultural data paltform to integrate your own models with Gro's full ontology and database.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section id="capstone-projects">
            <div className="container">
              <h3>Capstone Projects</h3>
              <div className="features">
                <article>
                  <a href="http://github.com/seungpark/chess-on-ruby" className="image"><img src="images/project-samples/chess.png" alt="" /></a>
                  <div className="inner">
                    <h4>Chess on Ruby</h4>
                    <p>A text-based game built completely on Ruby, loadable in terminal, with one or two players.
                    </p>
                    <p><a href="http://github.com/seungpark/chess-on-ruby">GitHub</a></p>
                  </div>
                </article>
                <article>
                  <a href="http://seungpark.com/chogrow" className="image"><video src="images/project-samples/chogrow.mp4" loop /></a>
                  <div className="inner">
                    <h4>ChoGrow</h4>
                    <p>
                      Snake Game with a League of Legends Twist. Structured with JS, CSS, JQuery, and Underscore.js. Try it Now!
                    </p>
                    <p><a href="http://github.com/seungpark/chogrow">GitHub</a></p>
                  </div>
                </article>
              </div>
            </div>
          </section>


          <section id="contact">
            <div className="container">
              <h3>Contact Me</h3>
              <p>Eager to work with a creative team of developers, designers, and marketers to build innovative web applications! Check out my pages on bottom right icons, or drop me a message!</p>
              <div className="4u$ 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home"><span className="label">Address</span></h3>
                    Queens, NY<br />
                    United States
                  </li>
                  <li>
                    <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                    (516) 514-7222
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                    <a href="mailto:seungpark222@google.com?Subject=Software Developer">seungpark222@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

        </div >


        <section id="footer">
          <div className="container">
            <ul className="copyright">
              <li>&copy; Seung Park. All rights reserved. 2022</li>
            </ul>
          </div>
        </section>

      </div >
      <div id="titleBar">
        <span className="title"><a href="#" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>Seung Park</a> </span>
        <span className='toggle' onClick={toggleMenu}></span>
      </div>
    </>

  )
}

export default App
