import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

export default function InfoSection() {
    return (
        <>
            <div>                <h1 className=" text-3xl md:text-5xl font-bold transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                Hi, I’m <br />
                <span className="text-transparent bg-clip-text bg-[#FB7C6D] drop-shadow-[0_2px_1px_rgba(0,0,0,0.6)]">
                    Nhat Huy
                </span>
            </h1>

                <h2 className=" text-xl md:text-3xl text-gray-300 hover:text-white transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                    I build clean, fast, and animated websites.
                </h2>

                <p className=" text-md md:text-lg text-gray-400 max-w-xl hover:text-gray-100 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                    I’m a front-end developer passionate about performance, animation, and creating delightful user experiences.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10">
                    <a
                        href="/cv-nhat-huy.pdf"
                        download
                        className="bg-gradient-to-r from-indigo-500 to-teal-400 px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300"
                    >
                        Download CV
                    </a>

                    <div className="flex gap-4 text-2xl mt-2 sm:mt-0">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-indigo-400 transition-transform transform hover:scale-125"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-transform transform hover:scale-125"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.facebook.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition-transform transform hover:scale-125"
                        >
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}