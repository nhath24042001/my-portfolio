'use client';

import { useState } from "react"
import Image from "next/image";

import { techStack } from "@/constants/data";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState('Frontend')
    const activeIndex = techStack.findIndex(tab => tab.name === activeTab);

    return (
        <section id='tech' className="h-screen container mx-auto px-4 py-6">
            <div className="h-full flex flex-col justify-center items-center">
                <h1 className="text-3xl">Tech Stack</h1>
                <h2 className="w-[50%] text-center text-[#ebebeb99]"> A comprehensive toolkit of modern technologies and frameworks that power my development journey. From frontend to backend, I leverage these tools to build scalable, efficient, and user-friendly applications. </h2>

                <div className="flex gap-4 mb-10 items-center mt-5">
                    {techStack.map((tab, tabIndex) => (
                        <div
                            key={tabIndex}
                            onClick={() => setActiveTab(tab.name)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold border cursor-pointer ${activeTab === tab.name ? 'bg-white text-black' : 'border-white'
                                }`}
                        >
                            {tab.name}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-4 gap-32">
                    {techStack[activeIndex].tech?.map((tech, index) => (
                        <div key={index}>
                            <Image src={tech.image} width={150} height={150} alt="tech_icon" />
                            <h3 className="text-white text-center mt-3">{tech.name}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}