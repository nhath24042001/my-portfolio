'use client'
import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'prismjs'
import { useEffect, useState } from 'react'

export const PrismCode = () => {
  const [code] = useState(`
    const profile = {
        name: 'Nazmul Hossain',
        title: 'Full-Stack Developer | Cloud Enthusiast | Problem Solver',
        skills: [
            'React', 'NextJS', 'Redux', 'Express',
            'MySQL', 'MongoDB', 'Docker', 'AWS', 'TypeScript',
            'GraphQL', 'Git', 'Linux', 'Discord Development'
        ],
        hardWorker: true,
        quickLearner: true,
        problemSolver: true,
        yearsOfExperience: 4, 
        hireable: function() {
            return (
                this.hardWorker &&
                this.problemSolver &&
                this.skills.length >= 5 &&
                this.yearsOfExperience >= 3
            );
        }
    };
      `)

  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <div className="w-full lg:w-1/2 animate__animated animate__fadeInDown animate__delay-0.1s">
      <div className="gradient-border">
        <div className="code-window bg-[#091121]">
          <div className="window-header">
            <div className="window-dot bg-red-500"></div>
            <div className="window-dot bg-yellow-500"></div>
            <div className="window-dot bg-green-500"></div>
            <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
              <i className="fas fa-code"></i>
              developer.js
            </span>
          </div>
          <pre className="language-javascript">
            <code className="language-javascript">{code}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
