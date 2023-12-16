export default function SelectedProject({ project }) {

    console.log(project)

    const formatDate = new Date(project.dueDate).toLocaleDateString('en-US')

    return (<div>
        <header>
            <div className="flex items-center justify-between">
                <h1>{project.title}</h1>
                <button>Delete</button>
            </div>
            <p>{formatDate}</p>
            <p>{project.description}</p>
        </header>
        Tasks
    </div>)
}