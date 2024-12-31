import getPostMetadata from "@/utils/getPostMetadata"
import FilterPosts from "@/utils/filterCategories"

export default function PostsPage(){
    const postsMetadata = getPostMetadata('blog_posts')
    console.log(postsMetadata)

    const postCategories = [...new Set(postsMetadata.map(post => post.category))];
    postCategories.push("🍪 all")
    postCategories.reverse()

    
    return(
        <div className="posts-page">
            <h2 className="page-heading">Posts</h2>
            <FilterPosts postsMetadata={postsMetadata} postCategories={postCategories}  />
        </div>
    )
}