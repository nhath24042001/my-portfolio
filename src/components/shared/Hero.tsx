'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-line', {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            className="min-h-screen flex flex-col justify-center items-start px-6 md:px-20 space-y-4 bg-black text-white"
        >
            <h1 className="hero-line text-3xl md:text-5xl font-bold">Hi, I’m Nhath.</h1>
            <h2 className="hero-line text-xl md:text-3xl text-gray-300">
                I build clean, fast, and animated websites.
            </h2>
            <p className="hero-line text-md md:text-lg text-gray-400 max-w-xl">
                I’m a front-end developer passionate about performance, animation, and creating delightful user experiences.
            </p>
        </section>
    )
}
