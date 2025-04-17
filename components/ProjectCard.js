import Link from "next/link"

export default function ProjectCard(props){
    const {project} = props
    return(
        <div className="projectCard">
          <div className="first-rect-card">
            <div className="shapes-container">
              <div className="shape s1"></div>
              <div className="shape s2"></div>
              <div className="shape s3"></div>
            </div>
            <div className="filler"></div>
          </div>
    
          <div className="content-rect-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-category">{project.category}</p>
            <p className="project-description">{project.description}</p>
            <p className="project-technology">{project.technology}</p>
          </div>
    
          <Link href={`/project/${project.slug}`} className="unstyled">
            <button className="view-btn">
                <span className="view-btn-txt">View Project</span>
            </button>
          </Link>
        </div>
        
    )
}