import React from "react";

import AddClientsModal from "../components/AddClientsModal";
import AddProjectModal from "../components/AddProjectModal";
import Clients from "../components/Clients";
import Projects from "../components/Projects";

const Home: React.FC = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientsModal />
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
};

export default Home;
