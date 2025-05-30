export interface FlipWordsProps {
  words: string[]
  duration?: number
  className?: string
}

export interface MeteorProps {
  number: number
}

export interface SparkleProps {
  id: string
  x: string
  y: string
  color: string
  delay?: number
  scale?: number
}


export interface SparkTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  colors?: {
    first: string
    second: string
  }
  className?: string
  sparklesCount?: number
}
