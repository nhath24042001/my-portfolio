'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

const NUM_CIRCLES = 20

export default function AnimatedBackground() {
  // Mảng lưu ref các circle
  const circlesRef = useRef<(SVGCircleElement | null)[]>([])

  useEffect(() => {
    // Khởi tạo vị trí và bán kính cho các vòng tròn
    circlesRef.current.forEach((circle) => {
      if (!circle) return
      const cx = Math.random() * window.innerWidth
      const cy = Math.random() * window.innerHeight
      const r = 10 + Math.random() * 20
      circle.setAttribute('cx', cx.toString())
      circle.setAttribute('cy', cy.toString())
      circle.setAttribute('r', r.toString())
      circle.style.opacity = (0.2 + Math.random() * 0.4).toString()
    })

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX
      const mouseY = e.clientY

      circlesRef.current.forEach((circle, i) => {
        if (!circle) return
        const factor = (i + 1) / circlesRef.current.length
        const targetX = mouseX * factor + (Math.random() * 50 - 25)
        const targetY = mouseY * factor + (Math.random() * 50 - 25)

        // Dùng gsap animate cx và cy
        gsap.to(circle, {
          attr: { cx: targetX, cy: targetY },
          duration: 0.6,
          ease: 'power3.out',
        })
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    
  )
}
