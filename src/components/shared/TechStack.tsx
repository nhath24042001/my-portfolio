'use client'

import { techStack } from '@/constants/data'
import { useEffect, useRef, useState } from 'react'
import TypeIt from 'typeit'

export default function TechSection() {
    const [activeTab, setActiveTab] = useState('Frontend')
    const typeRef = useRef<HTMLDivElement>(null)
    const typeItInstance = useRef<TypeIt>(null);

    // !TODO: Fix switching between tabs
    // !Currently, it does not reset the typewriter effect when switching tabs

    const activeText = techStack.find(tab => tab.name === activeTab)?.text || ''

    useEffect(() => {
        if (typeRef.current) {
            typeRef.current.innerHTML = '';

            if (typeItInstance.current) {
                typeItInstance.current.destroy();
            }

            typeItInstance.current = new TypeIt(typeRef.current, {
                strings: activeText,
                speed: 40,
                breakLines: true,
                cursor: true,
                loop: true,
                nextStringDelay: 1000,
                deleteSpeed: 20
            }).go();
        }

        return () => {
            if (typeItInstance.current) {
                typeItInstance.current.destroy();
            }
        };
    }, [activeTab, activeText]);

    return (
        <div className="w-full md:w-1/2 bg-zinc-900 p-6 rounded-xl text-white space-y-4 z-20">
            <div className="flex gap-4 mb-4 items-center">
                {techStack.map((tab, tabIndex) => (
                    <div
                        key={tabIndex}
                        onClick={() => setActiveTab(tab.name)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold border ${activeTab === tab.name ? 'bg-white text-black' : 'border-white'
                            }`}
                    >
                        <tab.icon className="inline-block mr-2" />
                        {tab.name}
                    </div>
                ))}
            </div>

            <div className="min-h-[300px] overflow-auto text-lg font-mono whitespace-pre-wrap">
                <div ref={typeRef}></div>
            </div>
        </div>
    )
}
