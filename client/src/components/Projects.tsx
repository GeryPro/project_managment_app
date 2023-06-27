import React from "react";

import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";

import Spinner from "./Spinner";
import ProjectCard from "./ProjectCard";

import { ProjectsData } from "../interfaces/project";

const Projects: React.FC = () => {
  const { loading, error, data } = useQuery<ProjectsData>(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {data?.projects && data?.projects.length > 0 ? (
        <div className="row mt-4">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
};

export default Projects;
