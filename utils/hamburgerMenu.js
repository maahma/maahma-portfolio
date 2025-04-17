"use client"

import React from "react"
import Link from "next/link"

const HamburgerMenu = () => {

    const closeMenu = () => {
        document.getElementById('menu__toggle').checked = false;
    };

    return (

        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
            </label>

            <ul className="menu__box">

                <li className="menu__item" onClick={closeMenu}>
                    <Link href="/">
                        <p>home</p>
                    </Link>
                </li>

                <li className="menu__item" onClick={closeMenu}>
                    <Link href={`/projects`}>
                        <p>projects</p>
                    </Link>
                </li>

                <li className="menu__item" onClick={closeMenu}>
                    <Link href={`/blog_posts`}>
                        <p>posts</p>
                    </Link>
                </li>

                <li className="menu__item" onClick={closeMenu}>
                    <Link href="/hire-me">
                        <p className="hire-me-button">Contact</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default HamburgerMenu;