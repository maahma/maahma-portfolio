import Markdown from "markdown-to-jsx"
import getProjectMetadata from "@/utils/getProjectMetadata"
import React from "react"
import fs from "fs"
import matter from "gray-matter"

function getProjectContent(slug) {
    const folder = "project_posts/"
    const file = folder + `${slug}.md`
    const content = fs.readFileSync(file, 'utf8')

    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = async () => {
    const projects = getProjectContent('project_posts')
    return projects.map((project) => ({slug:project.slug})) 
}

export async function generateMetadata({params, searchParams}) {
    const id = params?.slug ? ' . ' + params?.slug : ''
    return {
        title: `maaha ahmad ${id.replaceAll('_', ' ')}`
    }
}

export default function ProjectPage(props){
    const slug = props.params.slug
    const project = getProjectContent(slug)
    console.log(project.content)

    return(
        <main>
            <article>
                <Markdown>
                    {project.content}
                </Markdown>
            </article>
        </main>
    )
}