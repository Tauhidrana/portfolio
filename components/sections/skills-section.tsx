"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Code, Globe, Server, Database, ArrowUpRight, Palette, Layers, Lightbulb } from "lucide-react"

type Skill = {
  icon: React.ReactNode
  title: string
  description: string
}

const skills: Skill[] = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Frontend Development",
    description: "Building responsive and intuitive user interfaces with React, Next.js, and modern CSS frameworks like Tailwind."
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: "Backend Development",
    description: "Creating robust server-side applications with Node.js, Express, and handling API integrations efficiently."
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Database Management",
    description: "Designing and optimizing database schemas, with expertise in both SQL and NoSQL databases."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Web Performance",
    description: "Optimizing website performance for speed and user experience across all devices and browsers."
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "UI/UX Design",
    description: "Creating visually appealing interfaces with a focus on usability, accessibility, and user-centered design."
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Full Stack Architecture",
    description: "Designing and implementing complete application architecture from frontend to backend."
  }
]

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="skills" className="py-20 sm:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">What I Do</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 text-primary">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground flex-grow">{skill.description}</p>
                  <div className="mt-4 text-primary flex items-center text-sm">
                    <span>Learn more</span>
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}