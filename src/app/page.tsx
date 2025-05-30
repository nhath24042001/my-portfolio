import { GridBackground } from '@/components/pages/home/GridBackground'
import { Meteor } from '@/components/pages/home/Meteor'
import { SparkText } from '@/components/pages/home/SparkText'
import { FlipWords } from '@/components/pages/home/FlipWords'
import { PrismCode } from '@/components/pages/home/PrismCode'

const badgeItems = [
  {
    icon: 'fas fa-wand-magic-sparkles',
    label: 'UI Magic',
    colorClass: 'text-purple-400',
    bgClass: 'bg-purple-500/10',
    borderClass: 'border-purple-500/20',
    position: 'left-[5.5rem] top-[2.3rem]',
  },
  {
    icon: 'fas fa-code',
    label: 'Clean Code',
    colorClass: 'text-blue-400',
    bgClass: 'bg-blue-500/10',
    borderClass: 'border-blue-500/20',
    position: 'right-10 top-20',
  },
  {
    icon: 'fas fa-lightbulb',
    label: 'Innovation',
    colorClass: 'text-amber-400',
    bgClass: 'bg-amber-500/10',
    borderClass: 'border-amber-500/20',
    position: 'top-[17rem] left-[70%] transform -translate-x-1/2',
  },
]

export default function Home() {
  const words = [
    'Frontend Developer & UI/UX Enthusiast',
    'JavaScript Aficionado',
    'Framework Crafter',
    'Creative Problem Solver',
    'Tech Explorer',
    'Code Artisan',
    'Design Innovator',
    'Web Alchemist',
  ]

  return (
    <main className="bg-[#020617] text-white min-h-screen">
      <section className="hero-section-padding relative flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 md:py-16 lg:px-8 lg:py-0">
        <GridBackground />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteor number={20} />
        </div>

        <div className="container relative z-10 mx-auto flex flex-col items-center justify-between py-8 md:py-10 lg:flex-row lg:py-12 md:pt-28 xl:pt-28">
          <div className="relative mb-12 w-full animate__animated animate__fadeInLeft lg:mb-0 lg:w-1/2">
            <BackgroundCircles />
            <WelcomeBadge />
            <Heading />
            <RoleDescription words={words} />
            <IntroText />
            <ActionButtons />
            <FloatingBadges />
          </div>
        </div>

        <PrismCode />
      </section>
    </main>
  )
}

function WelcomeBadge() {
  return (
    <div className="animate__delay-1s mb-6 inline-flex items-center gap-2 rounded-full border border-gray-700/50 bg-gray-800/50 px-3 py-2 backdrop-blur-sm sm:mb-8 sm:px-4">
      <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
      <span className="text-xs font-medium text-gray-300 sm:text-sm">
        Welcome to my universe
      </span>
    </div>
  )
}

function Heading() {
  return (
    <div className="relative mb-6 sm:mb-8">
      <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
        <SparkText text="Hello" />
        <span className="relative inline-block">
          I&apos;m
          <span className="gradient-text typing-effect"> Nhat Huy</span>
        </span>
      </h1>
      <div className="absolute left-1/4 top-1/2 -z-10 h-24 w-24 -translate-y-1/2 rounded-full bg-blue-500/20 blur-2xl sm:h-32 sm:w-32 animate-pulse"></div>
    </div>
  )
}

function RoleDescription({ words }: { words: string[] }) {
  return (
    <div className="animate__delay-1s mb-6 inline-flex items-center gap-2 rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-teal-500/10 px-4 py-2 backdrop-blur-sm sm:mb-8 sm:gap-3 sm:rounded-2xl sm:px-6 sm:py-3">
      <i className="fas fa-rocket text-sm text-blue-400 animate-bounce sm:text-base" />
      <span>
        <FlipWords
          className="text-lg font-medium text-blue-400 sm:text-xl"
          words={words}
        />
      </span>
    </div>
  )
}

function IntroText() {
  return (
    <div className="relative mb-8 max-w-xl sm:mb-12">
      <p className="text-base leading-relaxed text-gray-300/90 sm:text-xl">
        JavaScript lover 🚀 | Crafting frameworks 💻✨
      </p>
    </div>
  )
}

function ActionButtons() {
  return (
    <div className="animate__delay-2s flex flex-col gap-4 sm:flex-row sm:gap-6">
      <ActionButton
        href="https://github.com/nhath24042001"
        text="Learn More"
        icon="fa-arrow-right"
        gradient="from-blue-500 to-teal-400"
        hoverShadow="shadow-[0_0_2rem_-0.5rem_#60A5FA]"
      />
      <ActionButton
        href="#"
        text="Get Resume"
        icon="fa-envelope"
        gradient="from-gray-800 to-gray-700"
        hoverShadow="shadow-[0_0_2rem_-0.5rem_#60A5FA]"
        border
      />
    </div>
  )
}

function ActionButton({
  href,
  text,
  icon,
  gradient,
  hoverShadow,
  border = false,
}: {
  href: string
  text: string
  icon: string
  gradient: string
  hoverShadow?: string
  border?: boolean
}) {
  const baseStyle =
    'group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl transition-all duration-300 hover:scale-105'
  const innerStyle = `block w-full rounded-[11px] px-6 py-3 sm:px-8 sm:py-4 transition-all duration-300 ${
    border
      ? 'bg-gray-900 border border-gray-700/50 group-hover:bg-gradient-to-r'
      : 'bg-gray-900 group-hover:bg-gradient-to-r'
  } group-hover:from-${gradient.split(' ')[0]} group-hover:to-${gradient.split(' ')[1]}`

  return (
    <a
      href={href}
      className={`${baseStyle} bg-gradient-to-r ${gradient} ${hoverShadow}`}
    >
      <span className={innerStyle}>
        <span
          className={`relative flex items-center justify-center gap-2 font-medium ${
            border ? 'text-gray-300 group-hover:text-white' : 'text-white'
          }`}
        >
          <span>{text}</span>
          <i className={`fas ${icon} transform transition-all duration-300`} />
        </span>
      </span>
    </a>
  )
}

function BackgroundCircles() {
  return (
    <>
      <div className="absolute hidden h-48 w-48 rounded-full bg-blue-500/10 blur-3xl lg:-top-20 lg:-left-20 lg:block lg:h-64 lg:w-64"></div>
      <div className="absolute hidden h-48 w-48 rounded-full bg-teal-500/10 blur-3xl lg:top-40 lg:-right-20 lg:block lg:h-64 lg:w-64"></div>
    </>
  )
}

function FloatingBadges() {
  return (
    <>
      {badgeItems.map((badge, idx) => (
        <div className={`hidden lg:block absolute ${badge.position} animate-float`} key={idx}>
          <div
            className={`px-4 py-2 rounded-lg backdrop-blur-sm border ${badge.bgClass} ${badge.borderClass} ${badge.colorClass}`}
          >
            <i className={badge.icon}></i>&nbsp;&nbsp;{badge.label}
          </div>
        </div>
      ))}
    </>
  )
}
