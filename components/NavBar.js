import React from "react"
import Link from "next/link"

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

                <li>
                    <Link href={`/cv`} >
                        <p>cv</p>
                    </Link>
                </li>

                <li>
                    <Link href="/hire-me">
                        <p>hire-me</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;