import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { BsDownload } from "react-icons/bs";


export default function InfoSection() {
    return (
        <>
            <div>
                <h1 className=" text-3xl md:text-5xl font-bold transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                    Hi,I’m 
                    <span className="text-transparent mx-3 bg-clip-text bg-[#FB7C6D] drop-shadow-[0_2px_1px_rgba(0,0,0,0.6)]">
                        Nhat Huy
                    </span>
                </h1>
                <h2 className="text-xl md:text-3xl text-gray-300 mt-4 hover:text-white transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                    I build clean, fast, and animated websites.
                </h2>
                <p className="mt-3 text-md md:text-lg text-gray-400 max-w-xl hover:text-gray-100 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                    I’m a front-end developer passionate about performance, animation, and
                    creating delightful user experiences.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10">
                    <a
                        href="/cv-nhat-huy.pdf"
                        download
                        className="px-6 py-3 flex items-center border-2 border-[#FB7C6D] text-[#FB7C6D] gap-3 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform duration-300"
                    >
                        Download CV
                        <BsDownload />
                    </a>

                    <div className="flex gap-4 text-2xl mt-2 sm:mt-0">
                        <a
                            href="https://github.com/nhath24042001"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform transform hover:scale-125"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/huy-nguy%E1%BB%85n-v%C4%83n-nh%E1%BA%ADt-2242b7273/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform transform hover:scale-125"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.facebook.com/nhathuy17.uit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform transform hover:scale-125"
                        >
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
