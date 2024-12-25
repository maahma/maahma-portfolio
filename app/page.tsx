import getPostMetadata from "@/utils/getPostMetadata"
import PostCard from "@/components/PostCard"

export default function Home() {
  const postsMetadata = getPostMetadata('blog_posts')
  console.log(postsMetadata)
  return (
    <main>
      <div className="postsContainer">
        {postsMetadata.map((post, postIndex) => {
          return(
            <PostCard key={postIndex} post={post} />
          )
        })}
      </div>>
    </main>
  );
}
