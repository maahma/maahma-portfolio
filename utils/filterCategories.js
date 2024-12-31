"use client"
import React, {useState} from "react"
import PostCard from "@/components/PostCard"

export default function filterCategories({postsMetadata, postCategories}){
    
    const [selectedCategory, setSelectedCategory] = useState("🍪 all")

    const handleCategory = (category) =>{
        setSelectedCategory(category)
    }

    const filteredPosts = selectedCategory === "🍪 all"
        ? postsMetadata
        : postsMetadata.filter(post => post.category === selectedCategory);

    return(
        <div>
            <div className="postCategories">
                {postCategories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => handleCategory(category)}
                        className={`category-btn ${selectedCategory === category ? "active" : ""}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="postsContainer">
            {filteredPosts.map((post, index) => (
                <PostCard key={index} post={post} />
            ))}
            </div>
        </div>
    )
}
