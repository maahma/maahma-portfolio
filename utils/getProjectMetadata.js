import fs from 'fs'
import matter from 'gray-matter'

export default function getProjectMetadata(basePath){
    const folder = basePath + '/'
    const files = fs.readdirSync(folder)
    const markdownProjects = files.filter(file => file.endsWith('.md'))

    // get the file data from md folder
    const projects = markdownProjects.map((fileName) => {
        const fileContents = fs.readFileSync(`${basePath}/${fileName}`, 'utf8')
        const matterResult = matter(fileContents)

        return {
            title: matterResult.data.title,
            category: matterResult.data.category,
            description: matterResult.data.description,
            technology: matterResult.data.technology,
            slug: fileName.replace('.md', "")
        }
    })

    return projects
}