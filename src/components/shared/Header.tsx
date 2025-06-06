'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'

export default function Header() {
    const headerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.fromTo(
            headerRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        )
    }, [])

    return (
        <header
            ref={headerRef}
            className="sticky top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md py-4 px-6"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <h1 className="text-xl font-bold text-white">nhath.dev</h1>
                <nav className="space-x-6 text-white font-medium">
                    <Link href="#about" className="hover:underline">About</Link>
                    <Link href="#tech" className="hover:underline">Tech</Link>
                    <Link href="#projects" className="hover:underline">Projects</Link>
                    <Link href="#experience" className="hover:underline">Experience</Link>
                    <Link href="#contact" className="hover:underline">Contact</Link>
                </nav>
            </div>
        </header>
    )
}
