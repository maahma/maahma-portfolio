import Link from "next/link"

export default function PostCard(props){
    const {post} = props
    return(
        <Link className="unstyled" href={`/blog_post/${post.slug}`}>
            <div className="postCard">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-category">{post.category}</p>
                <p className="post-description">{post.description}</p>

                <div className="statsContainer">
                    <div>
                        
                    </div>
                </div>
            </div>
        </Link>
    )
}