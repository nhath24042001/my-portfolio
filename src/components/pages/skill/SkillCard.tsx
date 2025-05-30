import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

interface SkillCardProps {
  icon: React.ElementType
  title: string
  skills: { name: string; icon: React.ReactNode }[]
  color?: string
}

export const SkillCard = ({
  icon: Icon,
  title,
  skills,
  color,
}: SkillCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer">
        <CardContent className="p-6 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
            >
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
                  {skill.icon}
                </span>
                <span className="font-medium">{skill.name}</span>
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
