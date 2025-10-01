import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Terminal, Code, Bot } from 'lucide-react'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const texts = [
    'Discord Bot Developer',
    'Lavalink Client Owner',
    'Open Source Contributor',
    'Music Bot Specialist',
    'Advanced Bot Framework Expert'
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < texts[textIndex].length) {
          setCurrentText(texts[textIndex].substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(texts[textIndex].substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyber-green/10 rounded-full blur-2xl animate-pulse-neon"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-8">
           <h1 className="text-6xl md:text-8xl font-cyber font-black mb-4">
             <span className="text-gradient glitch-text" data-text="ryxu-xo">
               ryxu-xo
             </span>
           </h1>
          <div className="text-2xl md:text-4xl font-mono text-cyber-blue mb-4">
            <Terminal className="inline-block w-8 h-8 mr-2" />
            <span className="terminal-cursor">{currentText}</span>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Crafting advanced Discord bots and powering the future of music streaming with{' '}
          <span className="text-cyber-blue neon-text">Euralink</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <motion.a
            href="#projects"
            className="cyber-button text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="inline-block w-5 h-5 mr-2" />
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="cyber-button text-lg px-8 py-4 border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:shadow-[0_0_20px_rgba(255,0,255,0.5)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bot className="inline-block w-5 h-5 mr-2" />
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-25 left-1/2 transform -translate-x-1/2"
          style={{ marginLeft: '-44px' }}
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-cyber-blue font-mono text-sm tracking-wider text-center whitespace-nowrap">
            SCROLL DOWN
          </div>
        </motion.div>
      </motion.div>

      {/* Terminal-style decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent"></div>
    </section>
  )
}

export default Hero
