import React from "react"
import Link from "next/link"
import Image from "next/image"

const NavBar = () => {
    return (
        <div className="nav-bar">
            <Link href="/">
                <h1>maaha ahmad</h1>
            </Link>
            <ul>
                <li>
                    <Link href={`/projects`}>
                        <p>projects</p>
                    </Link>
                </li>

                <li>
                    <Link href={`/blog_posts`}>
                        <p>posts</p>
                    </Link>
                </li>

                {/* <li>
                    <Link href={`/cv`} >
                        <p>cv</p>
                    </Link>
                </li> */}

                <li>
                    <Link href="/hire-me">
                        <p className="hire-me-button"><Image className="sparkle-1" src="images/sparkles.svg" alt="sparkle-icon" width={35} height={35} />hire-me<Image className="sparkle-2" src="images/sparkles.svg" alt="sparkle-icon"  width={35} height={35}  /></p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;