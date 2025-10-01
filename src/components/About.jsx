import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Server, Music, Zap, Shield, Users } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skills = [
    { icon: Code, name: 'Discord.js', level: 95 },
    { icon: Server, name: 'Lavalink', level: 90 },
    { icon: Music, name: 'Music Bots', level: 88 },
    { icon: Zap, name: 'Bot Frameworks', level: 92 },
    { icon: Shield, name: 'Security', level: 85 },
    { icon: Users, name: 'Community', level: 90 }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-dark-surface/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl font-cyber font-bold mb-6">
              <span className="text-gradient">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-cyber-blue mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="cyber-card">
                <h3 className="text-2xl font-cyber font-bold text-cyber-blue mb-4">
                  Developer & Entrepreneur
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate Discord bot developer and the creator of <span className="text-cyber-blue neon-text">Euralink</span>, 
                  a modern, fast, and feature-rich Lavalink client for Node.js that powers music bots across thousands of Discord servers.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  With years of experience in bot development, I specialize in creating advanced Discord bots, 
                  music streaming solutions, and scalable bot frameworks. My expertise spans from simple utility 
                  bots to complex multi-purpose applications with thousands of users.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I'm also an active contributor to the open-source community, sharing knowledge and tools 
                  that help other developers build better bots and services.
                </p>
              </div>

              {/* Euralink Highlight */}
              <motion.div variants={itemVariants} className="cyber-card border-cyber-green">
                <div className="flex items-center mb-4">
                  <Server className="w-8 h-8 text-cyber-green mr-3" />
                  <h4 className="text-xl font-cyber font-bold text-cyber-green">Euralink Client</h4>
                </div>
                <p className="text-gray-300">
                  Modern, fast, and feature-rich Lavalink client for Node.js providing high-quality music streaming 
                  for Discord bots with advanced features and optimizations.
                </p>
              </motion.div>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-cyber font-bold text-cyber-blue mb-6">
                Technical Expertise
              </h3>
              
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="cyber-card"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <skill.icon className="w-6 h-6 text-cyber-blue mr-3" />
                      <span className="font-mono font-medium">{skill.name}</span>
                    </div>
                    <span className="text-cyber-blue font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-dark-border rounded-full h-2">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
