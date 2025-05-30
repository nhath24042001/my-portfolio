export default function Skill() {
  // const skillCategories = [
  //   {
  //     icon: Code2,
  //     title: 'Frontend Development',
  //     color: 'text-blue-400',
  //     skills: [
  //       { name: 'React', icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
  //       {
  //         name: 'Next.js',
  //         icon: <SiNextdotjs className="w-4 h-4 text-white" />,
  //       },
  //       {
  //         name: 'TypeScript',
  //         icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
  //       },
  //       {
  //         name: 'Tailwind CSS',
  //         icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
  //       },
  //       {
  //         name: 'HTML5',
  //         icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
  //       },
  //       {
  //         name: 'CSS3',
  //         icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
  //       },
  //     ],
  //   },
  // ]

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none">
        <section className="container mx-auto px-4 py-11 relative z-10">
          <div className="flex justify-center items-center "></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {skillCategories.map((category, index) => (
              <SkillCard
                key={index}
                icon={category.icon}
                title={category.title}
                skills={category.skills}
                color={category.color}
              />
            ))} */}
          </div>
        </section>
      </div>
    </main>
  )
}
