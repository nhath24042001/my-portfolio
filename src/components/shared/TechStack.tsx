'use client'

import { useEffect, useRef, useState } from 'react'
import TypeIt from 'typeit'
import { FaCode } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import { IoHardwareChipOutline } from "react-icons/io5";


const techStack = [
    {
        name: 'Frontend',
        icon: <FaCode />,
        text: `
// React Component with Typewriter Effect 
import{ useState } from 'react'
import TypeIt from 'typeit'

const MyComponent = () => {
  new TypeIt("#formElement", {
  strings: "Alex MacArthur",
  waitUntilVisible: true,
}).go();

  return (
    <div className='App'>
      <span>{text}</span>
    </div>
  )
}
`
    },
    {
        name: 'Backend',
        icon: <GoDatabase />,
        text: `
        // Node.js API with Express
import express from 'express'
const app = express()
app.get('/api', (req, res) => {
    res.json({ message: 'Hello World' })
}
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
}
        `
    },
    {
        name: 'Devops',
        icon: <IoHardwareChipOutline />,
        text: `
            # Dockerfile Compose Configuration
version: '3.8'

services:
  web:
    image: my-web-app
    build: .
    ports:
        - "3000:3000"
    db:
    image: postgres
    environment:
        POSTGRES_USER: user
        POSTGRES_PASSWORD: password
        POSTGRES_DB: mydb
    volumes:
        - db_data:/var/lib/postgresql/data

    backend: 
    image: my-backend-app
    build: .
    ports:
        - "5000:5000"
        `

    }
]


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
                    <button
                        key={tabIndex}
                        onClick={() => setActiveTab(tab.name)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold border ${activeTab === tab.name ? 'bg-white text-black' : 'border-white'
                            }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            <div className="min-h-[300px] overflow-auto text-lg font-mono whitespace-pre-wrap">
                <div ref={typeRef}></div>
            </div>
        </div>
    )
}
