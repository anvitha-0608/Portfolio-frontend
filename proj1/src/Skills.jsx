import React from 'react';

function Skills() {
  return (
    <section id="skills" className="card">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        <div className="skills-category">
          <h3>Frontend Development</h3>
          <ul>
            <li><strong>React.js</strong> (Components, State, Hooks)</li>
            <li><strong>HTML5 & CSS3</strong> (Responsive layouts, Flexbox, Grid)</li>
            <li><strong>JavaScript</strong> (ES6+, DOM Manipulation)</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>Core Concepts</h3>
          <ul>
            <li><strong>Data Structures</strong> & Algorithms</li>
            <li><strong>UI/UX Design</strong> Principles</li>
            <li>Single Page Applications (<strong>SPAs</strong>)</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>Tools & Platforms</h3>
          <ul>
            <li><strong>Git & GitHub</strong> (Version Control)</li>
            <li><strong>Vite</strong> & Build Tools</li>
            <li>VS Code Ecosystem</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;