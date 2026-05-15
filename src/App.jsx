import { Toaster, toast } from 'react-hot-toast';
import { SiNodedotjs, SiExpress, SiReact, SiPython, SiMongodb, SiPostgresql, SiDocker, SiGit, SiSpringboot } from 'react-icons/si';
import { useState } from 'react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('gurupruthvijm@gmail.com').then(() => {
      toast.success('Email copied to clipboard!');
    }).catch(() => {
      toast.error('Failed to copy email');
    });
  };

  const copyPhone = () => {
    navigator.clipboard.writeText('+91 90198 67898').then(() => {
      toast.success('Phone number copied to clipboard!');
    }).catch(() => {
      toast.error('Failed to copy phone number');
    });
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Toaster position="top-right" />
      
      {/* FLOATING TECH ICONS */}
      <div className="floating-icons">
        <div className="float-icon" style={{left: '5%', top: '10%', animationDelay: '0s'}}><SiNodedotjs /></div>
        <div className="float-icon" style={{left: '10%', top: '30%', animationDelay: '2s'}}><SiExpress /></div>
        <div className="float-icon" style={{left: '85%', top: '15%', animationDelay: '1s'}}><SiReact /></div>
        <div className="float-icon" style={{left: '80%', top: '70%', animationDelay: '3s'}}><SiPython /></div>
        <div className="float-icon" style={{left: '15%', top: '60%', animationDelay: '1.5s'}}><SiMongodb /></div>
        <div className="float-icon" style={{left: '70%', top: '40%', animationDelay: '2.5s'}}><SiPostgresql /></div>
        <div className="float-icon" style={{left: '20%', top: '20%', animationDelay: '0.5s'}}><SiSpringboot /></div>
        <div className="float-icon" style={{left: '88%', top: '50%', animationDelay: '1.8s'}}><SiGit /></div>
      </div>
      <nav className="nav">
        <div className="nav-logo">GP</div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#experience" onClick={closeMenu}>Work</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#education" onClick={closeMenu}>Education</a></li>
          <li><a href="#achievements" onClick={closeMenu}>Recognition</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <div id="hero">
        <div className="hero-content">
          <div className="hero-tag fade-up">Available for opportunities</div>
          <h1 className="fade-up delay-1">
            Guru<br/>Pruthvi<span className="cursor"></span>
          </h1>
          <p className="hero-role fade-up delay-2">
            Full-Stack Engineer building scalable systems with Node.js, React &amp; Python.<br/>
            Currently at <span style={{color:'#fff'}}>Brillio</span>, crafting high-performance operational platforms.
          </p>
          <div className="hero-links fade-up delay-3">
            <a className="btn btn-primary" href="#contact">Get in touch</a>
            <a className="btn btn-outline" href="/Guru_Pruthvi_Resume.pdf" download>Resume ↓</a>
            <a className="btn btn-outline" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <section id="experience">
        <p className="section-label">// experience</p>
        <h2>Work</h2>

        <div className="exp-item">
          <div className="exp-date">Dec 2024 — Present</div>
          <div className="exp-body">
            <div className="exp-company">Brillio</div>
            <div className="exp-role">Associate Engineer · Operational Center · <span style={{color: 'var(--green)'}}>1 yr 6 mo</span></div>
            <div className="exp-stack">
              <span className="tag">Node.js</span>
              <span className="tag">Express.js</span>
              <span className="tag">React</span>
              <span className="tag">Python</span>
              <span className="tag">SQL</span>
            </div>
            <ul className="exp-bullets">
              <li>Developed and maintained scalable MERN-based applications handling large operational workflows, improving system reliability and reducing downtime.</li>
              <li>Optimized Python-based scheduled jobs, cutting execution time by 75% (40 → 10 minutes) and improving data pipeline efficiency.</li>
              <li>Designed and implemented REST APIs and microservices with Node.js &amp; Express, handling high-volume requests with optimized SQL queries.</li>
              <li>Debugged and resolved production issues, ensuring high availability and faster incident resolution.</li>
              <li> Leveraged AI-assisted development tools including ChatGPT, Claude, and GitHub Copilot to accelerate 
development, improve code quality, and deliver features with faster turnaround times. </li>
            </ul>
          </div>
        </div>

        <div className="exp-item">
          <div className="exp-date">Jan 2023 — Jun 2023</div>
          <div className="exp-body">
            <div className="exp-company">Hewlett Packard Enterprise</div>
            <div className="exp-role">HPE CTY Intern · Security Scanning · <span style={{color: 'var(--green)'}}>6 months</span></div>
            <div className="exp-stack">
              <span className="tag">Django</span>
              <span className="tag">OWASP ZAP</span>
              <span className="tag">Python</span>
              <span className="tag">Bootstrap</span>
            </div>
            <ul className="exp-bullets">
              <li>Built a web application security scanning system using Django and OWASP ZAP to detect vulnerabilities.</li>
              <li>Automated vulnerability detection workflows, improving security assessment efficiency.</li>
              <li>Solved key technical challenges in integrating scanning tools with web applications.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <p className="section-label">// projects</p>
        <h2>Built</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-num">01</div>
            <div className="project-name">Ticket Management System</div>
            <p className="project-desc">Full-stack ticketing platform with role-based access control, JWT authentication, ticket prioritization, filtering, and status tracking.</p>
            <div className="exp-stack">
              <span className="tag">Spring Boot</span>
              <span className="tag">React.js</span>
              <span className="tag">JWT</span>
              <span className="tag">REST API</span>
            </div>
          </div>
          <div className="project-card">
            <div className="project-num">02</div>
            <div className="project-name">Movie Recommender System</div>
            <p className="project-desc">ML-based recommender using collaborative filtering (user-based &amp; item-based) with optimized data processing for large datasets.</p>
            <div className="exp-stack">
              <span className="tag">Python</span>
              <span className="tag">ML</span>
              <span className="tag">Collab Filtering</span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <p className="section-label">// skills</p>
        <h2>Stack</h2>
        <div className="skills-grid">
          <div className="skill-group">
            <div className="skill-group-title">Languages</div>
            <div className="skill-list">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">C</span>
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-title">Frameworks</div>
            <div className="skill-list">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Spring Boot</span>
              <span className="skill-tag">Django</span>
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-title">Databases</div>
            <div className="skill-list">
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">DBMS</span>
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-title">Core Concepts</div>
            <div className="skill-list">
              <span className="skill-tag">DSA</span>
              <span className="skill-tag">OOP</span>
              <span className="skill-tag">OS</span>
              <span className="skill-tag">Networks</span>
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-title">Tools</div>
            <div className="skill-list">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">OWASP ZAP</span>
              <span className="skill-tag">REST APIs</span>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <p className="section-label">// education</p>
        <h2>Education</h2>
        <div className="edu-item">
          <div>
            <div className="edu-school">VidyaVardhaka College of Engineering, Mysuru</div>
            <div className="edu-degree">B.E. Information Science · Jul 2020 – Jun 2024</div>
          </div>
          <div className="edu-grade">9.1 CGPA</div>
        </div>
        <div className="edu-item">
          <div>
            <div className="edu-school">Shastry Composite PU College (PCMC), Hunsur</div>
            <div className="edu-degree">Pre-University (PCMC) · Apr 2018 – Apr 2020</div>
          </div>
          <div className="edu-grade">83%</div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements">
        <p className="section-label">// achievements</p>
        <h2>Recognition</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">⭐</div>
            <div className="achievement-content">
              <div className="achievement-title">Brillio Silver Star Award</div>
              <div className="achievement-desc">Recognized for exceptional performance, technical excellence, and outstanding contributions to operational platforms at Brillio</div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div className="achievement-date">2025</div>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7365624031720460289/" target="_blank" rel="noreferrer" className="achievement-link">Learn more →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <p className="section-label">// contact</p>
        <h2>Let's talk</h2>
        <a className="contact-email" onClick={copyEmail} style={{cursor: 'pointer'}}>gurupruthvijm@gmail.com</a>
        <div style={{display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap'}}>
          <button className="btn btn-primary" onClick={copyEmail}>Copy email</button>
          <button className="btn btn-outline" onClick={copyPhone}>Copy phone</button>
        </div>
      </section>

      <footer>
        © 2025 Guru Pruthvi J M — built with intention
      </footer>
    </>
  );
}