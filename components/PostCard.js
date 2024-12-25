import Link from "next/link"

export default PostCard(props){
    const {post} = props
    return(
        <Link className="unstyled" href={''}>
            <div className="postCard">
                <h3></h3>
            </div>
        </Link>
    )
}