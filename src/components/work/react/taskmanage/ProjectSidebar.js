import Button from '../../../common/ui/button/Button'

export default function ProjectSidebar({ onAddProject, projects, onSelectProject }) {

    // console.log(projects.id);

    return (
        <aside className=' bg-neutral-900 p-0 text-white'>
            <h2>Your Project</h2>
            <div>
                <Button onClick={onAddProject}>+ Add Project</Button>
            </div>
            <ul>
                {projects.map(project => {

                    let btnClass = "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800";

                    // if (project.id === onSelectProjectId) {
                    //     btnClass += ' bg-stone-800 text-stone-200'
                    // } else {
                    //     btnClass += ' text-stone-400'
                    // }

                    return (
                        <li key={project.id}>
                            <button className={btnClass} onClick={() => onSelectProject(project.id)} >{project.title}</button>
                        </li>
                    )
                })}
            </ul>

        </aside>
    )
}