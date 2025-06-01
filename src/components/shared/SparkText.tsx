'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { Sparkle } from './Sparkle'
import { SparkTextProps } from '@/types/props'
import { SparkleType } from '@/types/common'

export const SparkText = ({
  text,
  colors = { first: '#9E7AFF', second: '#FE8BBB' },
  className,
  sparklesCount = 10,
  ...props
}: SparkTextProps) => {
  const [sparkles, setSparkles] = useState<SparkleType[]>([])

  const generateSparkle = (timestamp: number): SparkleType => {
    const x = `${Math.random() * 100}%`
    const y = `${Math.random() * 100}%`
    const color = Math.random() > 0.5 ? colors.first : colors.second
    const delay = Math.random() * 2
    const scale = Math.random() * 1 + 0.3
    const lifespan = Math.random() * 10 + 5
    return {
      id: `${x}-${y}-${timestamp}`,
      x,
      y,
      color,
      delay,
      scale,
      lifespan,
    }
  }

  useEffect(() => {
    const now = Date.now()

    const initialSparkles = Array.from({ length: sparklesCount }, () =>
      generateSparkle(now)
    )
    setSparkles(initialSparkles)

    const interval = setInterval(() => {
      setSparkles((current) =>
        current.map((sparkle) =>
          sparkle.lifespan <= 0
            ? generateSparkle(Date.now())
            : { ...sparkle, lifespan: sparkle.lifespan - 0.1 }
        )
      )
    }, 100)

    return () => clearInterval(interval)
  }, [colors.first, colors.second, sparklesCount])

  return (
    <div
      className={cn('text-6xl font-bold', className)}
      {...props}
      style={
        {
          '--sparkles-first-color': colors.first,
          '--sparkles-second-color': colors.second,
        } as React.CSSProperties
      }
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
