import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Star, GitFork, Calendar, Code } from 'lucide-react'

const Projects = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Real project data from your GitHub repositories
  const mockRepos = [
    {
      name: 'Moosek',
      description: 'The official source code of Moosek with lots of features and more. A professional, high-performance Discord music bot built with Discord.js v14 and Euralink V4.',
      language: 'JavaScript',
      stars: 1,
      forks: 0,
      updated: '2024-01-15',
      url: 'https://github.com/ryxu-xo/Moosek',
      topics: ['discord-music-bot', 'discord', 'discordjs', 'discord-bot', 'lavalink', 'moosek']
    },
    {
      name: 'euralink',
      description: 'A modern, fast, and feature-rich Lavalink client for Node.js. Built by ryxu-xo, the creator of Euralink V4.',
      language: 'JavaScript',
      stars: 0,
      forks: 0,
      updated: '2024-01-10',
      url: 'https://github.com/ryxu-xo/euralink',
      topics: ['lavalink', 'client', 'music', 'discord-bot', 'nodejs']
    },
    {
      name: 'Discord-Bot-Creator-ADVANCED',
      description: 'A powerful and modern Discord bot creator that helps you scaffold Discord bots in multiple programming languages with best practices and modern setup.',
      language: 'JavaScript',
      stars: 0,
      forks: 0,
      updated: '2024-01-08',
      url: 'https://github.com/Enyzelle/Discord-Bot-Creator-ADVANCED',
      topics: ['discord-bot', 'creator', 'scaffold', 'javascript', 'typescript']
    },
    {
      name: 'Stellar-Bot',
      description: 'A Discord bot designed for music, moderation, and utility features, built using Discord.js v14.',
      language: 'JavaScript',
      stars: 0,
      forks: 0,
      updated: '2024-01-05',
      url: 'https://github.com/Enyzelle/Stellar-Bot',
      topics: ['discord-bot', 'music', 'moderation', 'utility', 'discordjs']
    },
    {
      name: 'Discord-Bot-Creator',
      description: 'The simplest way to create custom Discord bots quickly and effortlessly, perfect for beginners and advanced users alike.',
      language: 'JavaScript',
      stars: 0,
      forks: 0,
      updated: '2024-01-03',
      url: 'https://github.com/Enyzelle/Discord-Bot-Creator',
      topics: ['discord-bot', 'creator', 'beginner-friendly', 'javascript']
    }
  ]

  useEffect(() => {
    // Simulate API call
    const fetchRepos = async () => {
      setLoading(true)
      // In production, you would fetch from GitHub API here
      // const response = await fetch('https://api.github.com/users/ryxu-xo/repos')
      // const data = await response.json()
      
      setTimeout(() => {
        setRepos(mockRepos)
        setLoading(false)
      }, 1000)
    }

    fetchRepos()
  }, [])

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

  const ProjectCard = ({ repo, index }) => (
    <motion.div
      variants={itemVariants}
      className="cyber-card group hover:border-cyber-blue transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <Code className="w-6 h-6 text-cyber-blue mr-3" />
          <h3 className="text-xl font-cyber font-bold text-white group-hover:text-cyber-blue transition-colors">
            {repo.name}
          </h3>
        </div>
        <div className="flex space-x-2">
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyber-blue transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyber-blue transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed">
        {repo.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {repo.topics.map((topic) => (
          <span
            key={topic}
            className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue text-sm font-mono rounded-full border border-cyber-blue/30"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className={`w-3 h-3 rounded-full mr-2 ${
              repo.language === 'JavaScript' ? 'bg-yellow-400' :
              repo.language === 'TypeScript' ? 'bg-blue-400' :
              'bg-gray-400'
            }`}></div>
            <span className="font-mono">{repo.language}</span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1" />
            <span>{repo.stars}</span>
          </div>
          <div className="flex items-center">
            <GitFork className="w-4 h-4 mr-1" />
            <span>{repo.forks}</span>
          </div>
        </div>
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{new Date(repo.updated).toLocaleDateString()}</span>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl font-cyber font-bold mb-6">
              <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-cyber-blue mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore my open-source projects and contributions to the Discord bot ecosystem
            </p>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="cyber-card animate-pulse">
                  <div className="h-6 bg-dark-border rounded mb-4"></div>
                  <div className="h-4 bg-dark-border rounded mb-2"></div>
                  <div className="h-4 bg-dark-border rounded mb-4 w-3/4"></div>
                  <div className="flex space-x-2 mb-4">
                    <div className="h-6 bg-dark-border rounded w-16"></div>
                    <div className="h-6 bg-dark-border rounded w-20"></div>
                  </div>
                  <div className="h-4 bg-dark-border rounded w-1/2"></div>
                </div>
              ))}
            </div>
          )}

          {/* Projects Grid */}
          {!loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repos.map((repo, index) => (
                <ProjectCard key={repo.name} repo={repo} index={index} />
              ))}
            </div>
          )}

          {/* GitHub CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href="https://github.com/ryxu-xo"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button text-lg px-8 py-4 inline-flex items-center"
            >
              <Github className="w-6 h-6 mr-2" />
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
