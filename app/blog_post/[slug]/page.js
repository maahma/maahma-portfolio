import Markdown from "markdown-to-jsx"
import getPostMetadata from "@/utils/getPostMetadata"
import React from "react"
import fs from "fs"
import matter from "gray-matter"
import Image from 'next/image'

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


    const CustomMarkdown = ({ children }) => {
        const renderers = {
            img: ({ src, alt, width, height }) => (
                <Image
                    src={src} // adjust path as necessary
                    alt={alt}
                    width={width || 700} // default width
                    height={height || 400} // default height
                />
            ),
        }
    
        return <Markdown options={{ overrides: renderers }}>{children}</Markdown>
    }

    return(
        <main>
            <article>
                {/* <Markdown>   
                    {post.content}
                </Markdown> */}
                <CustomMarkdown>{post.content}</CustomMarkdown>
            </article>
        </main>
    )
}