import fs from 'fs'
import matter from 'gray-matter'

export default function getPostMetadata(basePath){
    const folder = basePath + '/'
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter(file => file.endsWith('.md'))

    // get the file data from md folder
    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`${basePath}/${fileName}`, 'utf8')
        const matterResult = matter(fileContents)

        return {
            title: matterResult.data.title,
            category: matterResult.data.category,
            description: matterResult.data.description,
            slug: fileName.replace('.md', "")
        }
    })

    return posts
}