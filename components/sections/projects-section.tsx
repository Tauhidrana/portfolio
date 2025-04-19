"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Supabase. Features include product listings, cart functionality, user authentication, and payment processing with Stripe.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for managing tasks and projects. Includes features like drag-and-drop task organization, team collaboration, and real-time updates.",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "A full-featured blog platform with modern design and powerful content management capabilities. Includes rich text editing, image uploads, and SEO optimization.",
    image: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg",
    technologies: ["Next.js", "Sanity CMS", "Vercel", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 4,
    title: "Social Network",
    description: "A social networking application with features like user profiles, posts, comments, and real-time messaging. Includes authentication and authorization.",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
    technologies: ["React", "Firebase", "Material UI", "WebSockets"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="projects" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="overflow-hidden h-full">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="secondary" 
                          onClick={() => setSelectedProject(project)}
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[625px]">
                        {selectedProject && (
                          <>
                            <DialogHeader>
                              <DialogTitle>{selectedProject.title}</DialogTitle>
                            </DialogHeader>
                            <div className="relative aspect-video my-4">
                              <Image
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                fill
                                className="object-cover rounded-md"
                              />
                            </div>
                            <DialogDescription>
                              {selectedProject.description}
                            </DialogDescription>
                            <div className="flex flex-wrap gap-2 mt-4">
                              {selectedProject.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">{tech}</Badge>
                              ))}
                            </div>
                            <DialogFooter className="mt-6">
                              <div className="flex space-x-4 w-full">
                                <Button asChild className="flex-1">
                                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Live Demo
                                  </a>
                                </Button>
                                <Button variant="outline" asChild className="flex-1">
                                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                    <Github className="mr-2 h-4 w-4" />
                                    Source Code
                                  </a>
                                </Button>
                              </div>
                            </DialogFooter>
                          </>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground line-clamp-2">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}