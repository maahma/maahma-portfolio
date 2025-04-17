import React from "react"
import Link from "next/link"
import Image from "next/image"
import HamburgerMenu from "../utils/hamburgerMenu"
import Nav from "../utils/nav"

const NavBar = () => {

    return (
        <div className="nav-bar">
            <Link href="/">
                <div className="nav-title">
                    <Image src="images/elements/M2.png" className="M-title" width={172} height={102}/>
                    <h1 className="name">aaha</h1>
                </div>
            </Link>

            <HamburgerMenu />
            <Nav />

        </div>
    )
}

export default NavBar;