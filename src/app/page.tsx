import { GridBackground } from '@/components/shared/GridBackground'
import { Meteor } from '@/components/shared/Meteor'
import { SparkText } from '@/components/shared/SparkText'

export default function Home() {
  return (
    <>
      <main className="bg-[#020617] text-white min-h-screen">
        <section
          className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding"
          style={{ paddingTop: 'var(--hero-padding-top, 0)' }}
        >
          <div className="absolute inset-0"></div>

          <GridBackground />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteor number={20} />
          </div>

          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate__animated animate__fadeInLeft relative">
              <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6 sm:mb-8 animate__animated animate__fadeInDown animate__delay-1s">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-gray-300 text-xs sm:text-sm font-medium">
                  Welcome to my universe
                </span>
              </div>

              <div className="relative mb-6 sm:mb-8">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  <SparkText text="Hello" />
                  <span className="relative inline-block">
                    I&apos;m
                    <span className="typing-effect gradient-text">
                      {' '}
                      Nhat Huy
                    </span>
                  </span>
                </h1>
                <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
