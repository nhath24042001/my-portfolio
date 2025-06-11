import { FaLongArrowAltDown } from "react-icons/fa";

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

            <div id="scroll-btn" className="cursor-pointer">
                <button className="text-[#FB7C6D] cursor-pointer">Scroll To Explore</button>
                <div className="flex items-center justify-center text-[#FB7C6D] mt-3"><FaLongArrowAltDown /></div>
            </div>
        </section>
    )
}