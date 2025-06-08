import InfoSection from '../shared/InfoSection'
import TechStack from '../shared/TechStack'

export default function Hero() {
    return (
        <section
            id='hero'
            className="--hero-section min-h-screen flex flex-col justify-center items-start px-6 md:px-20 space-y-6 bg-black text-white z-20"
        >
            <div className='flex items-center'>
                <InfoSection />
                <TechStack />
            </div>

            <button id="scroll-btn">Scroll To Explore</button>
        </section>
    )
}
