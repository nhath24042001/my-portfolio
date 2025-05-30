'use client'

import { cn } from '@/lib/utils'
import { FlipWordsProps } from '@/types/props'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'

const transitionConfig = {
  type: 'spring',
  stiffness: 100,
  damping: 10,
}

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: FlipWordsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextWord = useCallback(() => {
    const nextIndex = (currentIndex + 1) % words.length
    setCurrentIndex(nextIndex)
    setIsAnimating(true)
  }, [currentIndex, words.length])

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(nextWord, duration)
      return () => clearTimeout(timer)
    }
  }, [isAnimating, duration, nextWord])

  const currentWord = words[currentIndex]

  return (
    <AnimatePresence onExitComplete={() => setIsAnimating(false)}>
      <motion.div
        key={currentWord}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: 'blur(8px)',
          scale: 2,
          position: 'absolute',
        }}
        transition={transitionConfig}
        className={cn(
          'z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2',
          className
        )}
      >
        {currentWord.split(' ').map((word, wordIndex) => (
          <motion.span
            key={`${word}-${wordIndex}`}
            initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              delay: wordIndex * 0.3,
              duration: 0.3,
            }}
            className="inline-block whitespace-nowrap"
          >
            {word.split('').map((letter, letterIndex) => (
              <motion.span
                key={`${word}-${letterIndex}`}
                initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  delay: wordIndex * 0.3 + letterIndex * 0.05,
                  duration: 0.2,
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
