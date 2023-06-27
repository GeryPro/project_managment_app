import { Client } from "./client";

export interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  clientId: string;
}

export interface SingleProjectData {
  project: {
    id: string;
    name: string;
    description: string;
    status: string;
    client: Client;
  };
}

export interface ProjectsData {
  projects: Project[];
}
