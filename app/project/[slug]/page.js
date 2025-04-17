import Markdown from "markdown-to-jsx"
import getProjectMetadata from "@/utils/getProjectMetadata"
import React from "react"
import fs from "fs"
import matter from "gray-matter"
import Image from "next/image"


function getProjectContent(slug) {
    const folder = "project_posts/"
    const file = folder + `${slug}.md`
    const content = fs.readFileSync(file, 'utf8')

    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = async () => {
    const projects = getProjectMetadata('project_posts')
    return projects.map((project) => ({slug:project.slug})) 
}

export async function generateMetadata(params) {
    const id = params?.slug ? ' . ' + params?.slug : ''
    return {
        title: `maaha ahmad ${id.replaceAll('_', ' ')}`
    }
}

export default function ProjectPage(props){
    const slug = props.params.slug
    const project = getProjectContent(slug)
    console.log(project.content)
    const firstHeadingMatch = project.content.match(/^# (.+)/m)
    const firstHeading = firstHeadingMatch ? firstHeadingMatch[1] : "Untitled"

    console.log(firstHeading)  

    return(
        <main>
            {/* <article>
                <Markdown>
                    {project.content}
                </Markdown>
            </article> */}

            <div className="article-container">
                <div className="article-first-rect">
                    <div className="title-icon">
                        <Image className="notepad-img" src="../images/file-icons/notepad.png" width={37} height={37}/>
                        <p className="article-heading">{firstHeading}.txt - Notepad</p>
                    </div>

                    <div title="buttons don't do anything" className="close-min-buttons">
                        <Image className="min-img" src="../images/file-icons/min-icon.png" width={42} height={42}/>
                        <Image className="max-img" src="../images/file-icons/max-icon.png" width={42} height={42}/>
                        <Image className="cross-img" src="../images/file-icons/cross-icon.png" width={42} height={42}/>
                    </div>
                    
                </div>
                <article>
                    <ul title="buttons don't do anything" className="article-second-rect-text">
                        <li>File</li>
                        <li>Edit</li>
                        <li>View</li>
                        {/* <li>Settings</li> */}
                    </ul>

                    <div className="markdown-content">
                        <Markdown>   
                            {project.content}
                        </Markdown>
                    </div>
                    
                </article>
            </div>
        </main>
    )
}