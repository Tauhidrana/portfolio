"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import HeroImage from "@/images/1722302251380.jpg"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image 
                src={HeroImage} 
                alt="Tauhid - Full-stack Developer" 
                fill 
                className="object-cover" 
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  I am a passionate Full-stack Web Developer with expertise in creating 
                  modern, responsive, and user-friendly web applications. With a 
                  strong foundation in both front-end and back-end technologies, 
                  I bring ideas to life through clean, efficient, and maintainable code.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  My journey in web development began 5 years ago, and since then, 
                  I've had the opportunity to work on a variety of projects, 
                  from small business websites to complex enterprise applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing my knowledge 
                  through blog posts and community forums.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}