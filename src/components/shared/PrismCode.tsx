'use client'

import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'prismjs'
import { useEffect } from 'react'

export const PrismCode = () => {
  const code = `
const profile = {
  name: 'Nhat Huy',
  title: 'Frontend Developer | Fullstack Enthusiast | Problem Solver',
  skills: [
    'React', 'NextJS', 'Vue', 'Angular',
    'TypeScript', 'RTK Query',
    'GraphQL', 'Git'
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  yearsOfExperience: 2, 
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5 &&
      this.yearsOfExperience >= 2
    );
  }
};
`.trim()

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div className="w-full lg:w-1/2 animate__animated animate__fadeInDown animate__delay-0.1s">
      <div className="gradient-border">
        <div className="code-window bg-[#091121]">
          <div className="window-header flex items-center px-4 py-2 border-b border-[#1e293b]">
            <div className="window-dot bg-red-500" />
            <div className="window-dot bg-yellow-500 ml-2" />
            <div className="window-dot bg-green-500 ml-2" />
            <span className="ml-4 text-sm text-gray-400 flex items-center gap-2">
              <i className="fas fa-code"></i>
              developer.js
            </span>
          </div>
          <pre className="language-javascript text-sm p-4 overflow-x-auto">
            <code className="language-javascript">{code}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
