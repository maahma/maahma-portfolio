import getProjectMetadata from "@/utils/getProjectMetadata"
import FilterProjects from "@/utils/filterProjects"

export default function ProjectsPage(){
    const projectsMetadata = getProjectMetadata('project_posts')
    console.log(projectsMetadata)

    const projectCategories = [...new Set(projectsMetadata.map(project => project.category))];
    projectCategories.push("🍪 all")
    projectCategories.reverse()

    return(
        <div className="projects-page">
            <h2 className="page-heading">Projects</h2>
            <FilterProjects projectMetadata={projectsMetadata} projectCategories={projectCategories}  />
        </div>
    )
}