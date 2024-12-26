import Link from "next/link"

export default function ProjectCard(props){
    const {project} = props
    return(
        <Link className="unstyled" href={`/project/${project.slug}`}>
            <div className="projectCard">
                <h3>{project.title}</h3>

                <div className="statsContainer">
                    <div>
                        
                    </div>
                </div>
            </div>
        </Link>
    )
}