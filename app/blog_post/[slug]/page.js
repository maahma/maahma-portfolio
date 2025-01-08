import Markdown from "markdown-to-jsx"
import getPostMetadata from "@/utils/getPostMetadata"
import React from "react"
import fs from "fs"
import matter from "gray-matter"

function getPostContent(slug) {
    const folder = "blog_posts/"
    const file = folder + `${slug}.md`
    const content = fs.readFileSync(file, 'utf8')

    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata('blog_posts')

    return posts.map((post) => ({slug:post.slug})) 
}

export async function generateMetadata(params) {
    const id = params?.slug ? ' . ' + params?.slug : ''
    return {
        title: `maaha ahmad ${id.replaceAll('_', ' ')}`
    }
}

export default function BlogPage(props){
    const slug = props.params.slug
    const post = getPostContent(slug)
    console.log(post.content)

    // Custom component for handling images
    const imageComponent = ({ alt, src }) => {
        return <img alt={alt} src={src} style={{ maxWidth: '100%', height: 'auto' }} />
    }

    // Custom component for handling videos
    const videoComponent = ({ src }) => {
        return (
            <video controls width="600">
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        )
    }

    return(
        <main>
            <article>
                <Markdown
                options={{
                    overrides: {
                        img: { component: imageComponent },
                        video: { component: videoComponent },
                    }
                }}
                >
                    {post.content}
                </Markdown>
            </article>
        </main>
    )
}