'use client'
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react'
import { Sparkle } from './Sparkle';

interface SparkTextProps {
  text: string
  colors?: { first: string; second: string }
  className?: string
  sparklesCount?: number
}

type Sparkle = {
  id: string
  x: string
  y: string
  color: string
  delay: number
  scale: number
  lifespan: number
}

export const SparkText = ({
  text,
  colors = { first: '#9E7AFF', second: '#FE8BBB' },
  className,
  sparklesCount = 10,
  ...props
}: SparkTextProps) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const generateStar = () => {
      const starX = `${Math.random() * 100}%`
      const starY = `${Math.random() * 100}%`
      const color = Math.random() > 0.5 ? colors.first : colors.second
      const delay = Math.random() * 2
      const scale = Math.random() * 1 + 0.3
      const lifespan = Math.random() * 10 + 5
      const id = `${starX}-${starY}-${Date.now()}`
      return { id, x: starX, y: starY, color, delay, scale, lifespan }
    }

    const initializeStars = () => {
      const newSparkles = Array.from({ length: sparklesCount }, generateStar)
      setSparkles(newSparkles)
    }

    const updateStars = () => {
      setSparkles((currentSparkles) =>
        currentSparkles.map((star) => {
          if (star.lifespan <= 0) {
            return generateStar()
          } else {
            return { ...star, lifespan: star.lifespan - 0.1 }
          }
        })
      )
    }

    initializeStars()
    const interval = setInterval(updateStars, 100)

    return () => clearInterval(interval)
  }, [colors.first, colors.second, sparklesCount])
  return (
    <div
      className={cn('text-6xl font-bold', className)}
      {...props}
      style={{
        // @ts-expect-error: Allow custom CSS variables
        '--sparkles-first-color': `${colors.first}`,
        '--sparkles-second-color': `${colors.second}`,
      }}
    >
      <span className="relative inline-block">
        {sparkles.map((sparkle) => (
          <Sparkle key={sparkle.id} {...sparkle} />
        ))}
        <strong>{text}</strong>
      </span>
    </div>
  )
}
