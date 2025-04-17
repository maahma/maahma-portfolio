"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav() {
  const pathname = usePathname();
  
  return (
    <nav>
      <ul className="options">
        <li className="option">
          <Link href={`/projects`} className={pathname === '/projects' ? 'active' : ''}>
            <p>PROJECTS</p>
          </Link>
        </li>

        <li className="option">
          <Link href={`/blog_posts`} className={pathname === '/blog_posts' ? 'active' : ''}>
            <p>POSTS</p>
          </Link>
        </li>

        <li className="option">
          <Link href="/hire-me" className={pathname === '/hire-me' ? 'active' : ''}>
            <p>CONTACT</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}