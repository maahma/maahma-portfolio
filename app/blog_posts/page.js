import React from "react"
import PostCard from "@/components/PostCard"
import getPostMetadata from "@/utils/getPostMetadata"

export default function PostsPage(){
    const postsMetadata = getPostMetadata('blog_posts')
    console.log(postsMetadata)
    return(
        <div>
            <div className="postsContainer">
            {postsMetadata.map((post, postIndex) => {
            return(
                <PostCard key={postIndex} post={post} />
            )
            })}
        </div>
        </div>
    )
}