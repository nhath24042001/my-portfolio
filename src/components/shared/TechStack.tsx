'use client'

import { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'

const techStack = {
    FE: ['React', 'Vue', 'TypeScript', 'Tailwind', 'GSAP'],
    BE: ['Node.js', 'Express', 'NestJS', 'MongoDB', 'PostgreSQL'],
    Infra: ['Docker', 'Nginx', 'AWS', 'Vercel', 'CI/CD'],
}

type TechTab = keyof typeof techStack

const tabs: TechTab[] = Object.keys(techStack) as TechTab[]

export default function TechSection() {
    const [activeTab, setActiveTab] = useState<TechTab>('FE')
    const [isTyping, setIsTyping] = useState(true)

    return (
        <div className="w-full md:w-1/2 bg-zinc-900 p-6 rounded-xl text-white space-y-4 z-20">
            <div className="flex gap-4 mb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold border ${activeTab === tab ? 'bg-white text-black' : 'border-white'
                            }`}
                    >
                        {tab}
                    </button>
                ))}

                <button
                    onClick={() => setIsTyping((prev) => !prev)}
                    className="ml-auto text-xs underline hover:text-teal-400 transition"
                >
                    {isTyping ? 'Stop Typing' : 'Start Typing'}
                </button>
            </div>

            <div className="min-h-[40px] text-lg font-mono">
                {isTyping ? (
                    <Typewriter
                        words={techStack[activeTab]}
                        loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={80}
                        deleteSpeed={40}
                        delaySpeed={1000}
                    />
                ) : (
                    <div className="flex flex-wrap gap-2">
                        {techStack[activeTab].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-teal-700 rounded-full text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
