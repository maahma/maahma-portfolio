"use client"
import React, {useState} from "react"
import ProjectCard from "@/components/ProjectCard"

export default function filterProjects({projectMetadata, projectCategories}){
    
    const [selectedCategory, setSelectedCategory] = useState("🍪 all")

    const handleCategory = (category) =>{
        setSelectedCategory(category)
    }

    const filteredProjects = selectedCategory === "🍪 all"
        ? projectMetadata
        : projectMetadata.filter(project => project.category === selectedCategory);

    return(
        <div>
            <div className="projectCategories">
                {projectCategories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => handleCategory(category)}
                        className={`category-btn ${selectedCategory === category ? "active" : ""}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="projectsContainer">
            {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
            </div>
        </div>
    )
}
