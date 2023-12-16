
import { useState } from "react";

import NewProject from "./NewProject";
import ProjectSidebar from "./ProjectSidebar";
import SelectedProject from "./SelectedProject";

export default function ProjectManager() {

    const [projectState, setProjectState] = useState({
        selectedProject: undefined,
        projects: []
    });

    function handleSelectProject(id) {
        setProjectState(
            prevState => {
                return {
                    ...prevState,
                    selectedProject: id
                }
            }
        )
    }

    function handleStartProject() {
        setProjectState(
            prevState => {
                return {
                    ...prevState,
                    selectedProject: null,
                }
            }
        )
    }

    function handleAddProject(projectData) {
        setProjectState(prevState => {
            const projectId = Math.random();
            const newProject = {
                ...projectData,
                id: projectId,
            };
            return {
                ...prevState,
                selectedProject: undefined,
                projects: [...prevState.projects, newProject]
            }
        })
    }



    const selectedProject = projectState.projects.find((project) => project.id === projectState.selectedProject)

    // console.log(selectedProject);

    let content = <SelectedProject project={selectedProject} />;

    if (projectState.selectedProject === null) {
        content = <NewProject onAdd={handleAddProject} />
    } else if (projectState.selectedProject === undefined) {
        content = <p>No Project Selected</p>
    }

    return (
        <div className="projectManager">
            <div className=" h-screen my-8 flex gap-8">
                <ProjectSidebar onAddProject={handleStartProject} projects={projectState.projects} onSelectProject={handleSelectProject} />
                {content}
            </div>
        </div>
    )
}