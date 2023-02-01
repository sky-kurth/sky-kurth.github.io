import React from 'react'
import '../../App.css';
import './Home.css';
import { Button } from 'antd';

const skills = [ "C#", "Blender", "Python", "Javascript", "Photoshop", "Java", "Indesign", "CSS", "After Effects", 
  "JUnit", "MongoDB", "Unity", "Docker", "Figma", "Maya", "SQL", "Illustrator", "HTML", "React", "Adobe XD", "Git"]

function generateSkills(skills){
  const skillList = [];
  skills.forEach(function (skill) {
    var newSkill = <p class="skill">{skill}</p>;
    skillList.push(newSkill);
  });
  
  return(skillList);
}


function Home() {
  return (
    <>
      <div class="row" id="header">
        <img id="headshot" src={"img/headshot_back.png"} alt="" />
        <div class="col" id="headerContent">
          <p class="txt-accent txt-subtitle">Hi! I'm Skylar</p>
          <p class="txt-bright txt-headline" id="headerTitle">
            Human-Computer Interaction Designer & Web Developer
          </p>
          <div className="row">
            <p class="txt-body">
              With a passion for both design and problem-solving, I get to live
              my dream job as a developer doing both.
            </p>
            <Button type="primary">Button</Button>
          </div>
        </div>
      </div>

      <div class="col" id="services">
        <div class="row">
          <div class="col">
            <p class="txt-accent">SERVICES</p>
            <p class="txt-bright txt-subtitle">
              I offer a wide range of design and development skills
            </p>
          </div>
          <img id="screens" src={"img/screens.png"} alt="" />
        </div>
        <div class="row" id="serviceCards">
          <div class="col drop-box" id="serviceCard">
            <p class="txt-bright txt-headline">Design</p>
            <p class="txt-body">
              The look and feel of a site matters to users. I can design a
              stunning visual interface to represent your brand, with prototypes
              you can interact with.
            </p>
          </div>
          <div class="col drop-box" id="serviceCard">
            <p class="txt-bright txt-headline">Build</p>
            <p class="txt-body">
              Responsive, quality code is essential. Starting with the basic web
              building blocks, HTML, CSS, and JS, I can bring any vision to life
              in live code.
            </p>
          </div>
          <div class="col drop-box" id="serviceCard">
            <p class="txt-bright txt-headline">Test</p>
            <p class="txt-body">
              Intuitive workflows keep site users engaged. With hands on
              testing, I can identify and eliminate frustrating pain points and
              maximize user satisfaction.
            </p>
          </div>
        </div>
        <div class="row" id="skills">
          {generateSkills(skills)}
        </div>
      </div>

      <div class="col" id="recentWork">
        <p class="txt-accent">MY RECENT WORK</p>
        <div class="row">
          <p class="txt-bright txt-subtitle">Resilient Sierra Program</p>
          <Button type="primary">View More</Button>
        </div>
        <img id="recentWorkIMG" src={"img/recentWorkRS.png"} alt="" />
      </div>

      <div class="col" id="designWork">
        <p class="txt-accent">DESIGN WORK</p>
        <div class="row">
          <p class="txt-bright txt-subtitle">From concept to polished work</p>
          <Button type="primary">View More</Button>
        </div>
        <img id="designWorkIMG" src={"img/designWork.png"} alt="" />
      </div>

      <div class="col" id="footer">
        <p class="txt-bright txt-subtitle">Let's Connect</p>
        <p class="txt-body">Feel free to reach out for opportunities!</p>
        <div class="row" id="shareIcons">
          {/* eslint-disable-next-line */}
          <a class="shareIcon" id="linkedin" href="https://www.linkedin.com/in/skylar-k-64b579b9/" target="_blank"/>
          {/* eslint-disable-next-line */}
          <a class="shareIcon" id="github" href="https://github.com/sky-kurth" target="_blank"/>
          {/* eslint-disable-next-line */}
          <a class="shareIcon" id="email" href="https://gmail.com" target="_blank"/>
        </div>
      </div>
    </>
  );
}

export default Home
