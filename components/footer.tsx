"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-card py-12 border-t border-border/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6">
            <Link 
              href="#home"
              className="text-2xl font-bold tracking-tighter"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Tauhid
            </Link>
          </div>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:contact@example.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Tauhid. All rights reserved.</p>
            <p className="mt-1">Full-stack Web Developer</p>
          </div>
        </div>
      </div>
    </footer>
  )
}