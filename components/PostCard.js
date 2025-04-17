import Link from "next/link"

export default function PostCard(props){
    const {post} = props
    return (
        <div className="postCard">
          <div className="first-rect-card">
            <div className="shapes-container">
              <div className="shape s1"></div>
              <div className="shape s2"></div>
              <div className="shape s3"></div>
            </div>
            <div className="filler"></div>
          </div>
    
          <div className="content-rect-card">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-category">{post.category}</p>
            <p className="post-description">{post.description}</p>
          </div>
    
          <Link href={`/blog_post/${post.slug}`} className="unstyled">
            <button className="view-btn">
                <span className="view-btn-txt">View Post</span>
            </button>
          </Link>
        </div>
      );
}