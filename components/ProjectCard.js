import Link from "next/link"

export default function ProjectCard(props){
    const {project} = props
    return(
        <Link className="unstyled" href={`/project/${project.slug}`}>
            <div className="projectCard">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>

                {/* <div className="statsContainer">
                    <div>
                        
                    </div>
                </div> */}
            </div>
        </Link>
    )
}