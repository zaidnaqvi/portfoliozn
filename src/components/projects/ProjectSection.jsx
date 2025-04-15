import React from "react";
import styled from "styled-components";
import SectionWrapper from "../ui/SectionWrapper";
import ProjectScene from "../../canvas/ProjectScene";

const ProjectsContainer = styled.div`
  width: 100%;
  height: 600px; /* Adjust as needed */
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const projectsData = [
  {
    name: "Project A",
    description: "Description of Project A.",
    color: "lightblue",
  },
  {
    name: "Project B",
    description: "Description of Project B.",
    color: "lightcoral",
  },
  {
    name: "Project C",
    description: "Description of Project C.",
    color: "lightgreen",
  },
  // Add more project data here
];

function ProjectSection() {
  return (
    <SectionWrapper id="projects">
      <Title>Projects</Title>
      <ProjectsContainer>
        <ProjectScene projects={projectsData} />
      </ProjectsContainer>
      {/* You can add a grid or list view of project details below the 3D scene */}
      {/* <div>
        {projectsData.map((project, index) => (
          <div key={index} style={{ margin: '20px', border: '1px solid #ccc', padding: '15px' }}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <Button onClick={() => console.log(`View ${project.name}`)}>View Project</Button>
          </div>
        ))}
      </div> */}
    </SectionWrapper>
  );
}

export default ProjectSection;
