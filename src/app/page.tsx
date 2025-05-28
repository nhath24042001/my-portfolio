import { GridBackground } from '@/components/shared/GridBackground'
import { Meteor } from '@/components/shared/Meteor'

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
        </section>
      </main>
    </>
  )
}
