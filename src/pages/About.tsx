// about-comp.tsx
import { FC } from "react";
import { aboutData } from "../data/about-data";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import "../styles/about-style.css";

const About: FC = () => {
  const iconMap: { [key: string]: JSX.Element } = {
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    leetcode: <FaCode />,
  };

  return (
    <div className="about">
      <div className="description">
        <h1 className="title">{aboutData.title}</h1>
        <p className="text">{aboutData.description}</p>
      </div>

      <div className="influences">
        <h1 className="title">Readings and Major Influences</h1>
        <ul className="list">
          {aboutData.influences.map((influence, index) => (
            <li key={index}>
              <a
                href={influence.url}
                target="_blank"
                rel="noopener noreferrer"
                className="influence-link"
              >
                {" "}
                - {influence.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="profiles">
        <h1 className="title">My Profiles</h1>
        <ul className="icons">
          {aboutData.links.map((link, index) => {
            let icon = <FaCode />;
            if (link.includes("github")) icon = iconMap.github;
            if (link.includes("linkedin")) icon = iconMap.linkedin;

            return (
              <li key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default About;
