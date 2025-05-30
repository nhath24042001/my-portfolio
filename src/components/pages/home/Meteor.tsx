'use client'

import { cn } from '@/lib/utils'
import { MeteorStyle } from '@/types/common'
import { MeteorProps } from '@/types/props'
import { useEffect, useState } from 'react'

const generateMeteorStyle = (): MeteorStyle => ({
  top: -5,
  left: `${Math.floor(Math.random() * window.innerWidth)}px`,
  animationDelay: `${(Math.random() * 1 + 0.2).toFixed(2)}s`,
  animationDuration: `${Math.floor(Math.random() * 8 + 2)}s`,
})

export const Meteor = ({ number }: MeteorProps) => {
  const [meteorStyles, setMeteorStyles] = useState<MeteorStyle[]>([])

  useEffect(() => {
    const styles = Array.from({ length: number }, generateMeteorStyle)
    setMeteorStyles(styles)
  }, [number])

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className={cn(
            'pointer-events-none absolute left-1/2 top-1/2 size-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]'
          )}
          style={style}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
      ))}
    </>
  )
}
