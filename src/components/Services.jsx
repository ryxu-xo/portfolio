import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Server, Bot, Code, Zap, Shield, Headphones, Globe, Users } from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: Server,
      title: 'Euralink Client',
      description: 'Modern, fast, and feature-rich Lavalink client for Node.js with advanced features and optimizations.',
      features: ['High Performance', 'Modern API', 'Advanced Features', 'Node.js Optimized'],
      color: 'cyber-green',
      highlight: true
    },
    {
      icon: Bot,
      title: 'Custom Discord Bots',
      description: 'Tailored Discord bots for your community with advanced features and seamless integration.',
      features: ['Custom Commands', 'Moderation Tools', 'Music Integration', 'User Management'],
      color: 'cyber-blue'
    },
    {
      icon: Headphones,
      title: 'Music Bot Development',
      description: 'Advanced music bots with high-quality audio streaming and playlist management.',
      features: ['High-Quality Audio', 'Playlist Support', 'Queue Management', 'Cross-Platform'],
      color: 'cyber-purple'
    },
    {
      icon: Code,
      title: 'Bot Framework Development',
      description: 'Scalable bot frameworks and libraries for rapid development and deployment.',
      features: ['Modular Design', 'Plugin System', 'Auto-Scaling', 'Documentation'],
      color: 'cyber-yellow'
    },
    {
      icon: Shield,
      title: 'Security & Optimization',
      description: 'Bot security audits, performance optimization, and best practices implementation.',
      features: ['Security Audits', 'Performance Tuning', 'Code Review', 'Best Practices'],
      color: 'cyber-red'
    },
    {
      icon: Users,
      title: 'Community Management',
      description: 'Discord server setup, moderation bots, and community management solutions.',
      features: ['Server Setup', 'Moderation Tools', 'Auto-Moderation', 'Analytics'],
      color: 'cyber-blue'
    }
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

  const ServiceCard = ({ service, index }) => (
    <motion.div
      variants={itemVariants}
      className={`cyber-card group hover:border-${service.color} transition-all duration-300 ${
        service.highlight ? 'border-cyber-green/50 bg-cyber-green/5' : ''
      }`}
    >
      <div className="flex items-start mb-4">
        <div className={`p-3 rounded-lg bg-${service.color}/20 border border-${service.color}/30 mr-4`}>
          <service.icon className={`w-8 h-8 text-${service.color}`} />
        </div>
        <div className="flex-1">
          <h3 className={`text-xl font-cyber font-bold text-${service.color} mb-2`}>
            {service.title}
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            {service.description}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-mono font-medium text-gray-400 mb-2">Key Features:</h4>
        <div className="flex flex-wrap gap-2">
          {service.features.map((feature) => (
            <span
              key={feature}
              className={`px-3 py-1 bg-${service.color}/20 text-${service.color} text-sm font-mono rounded-full border border-${service.color}/30`}
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {service.highlight && (
        <div className="mt-4 p-3 bg-cyber-green/10 border border-cyber-green/30 rounded-lg">
          <div className="flex items-center">
            <Zap className="w-5 h-5 text-cyber-green mr-2" />
            <span className="text-cyber-green font-mono text-sm font-medium">
              Featured Service
            </span>
          </div>
        </div>
      )}
    </motion.div>
  )

  return (
    <section id="services" className="py-20 bg-dark-surface/30">
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
              <span className="text-gradient">Services</span>
            </h2>
            <div className="w-24 h-1 bg-cyber-blue mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional Discord bot development and hosting services for communities of all sizes
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="cyber-card max-w-4xl mx-auto">
              <h3 className="text-3xl font-cyber font-bold text-cyber-blue mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss your project requirements and create a custom solution that fits your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="cyber-button text-lg px-8 py-4"
                >
                  <Bot className="w-6 h-6 mr-2" />
                  Start a Project
                </a>
                <a
                  href="mailto:contact@ryxu-xo.tech"
                  className="cyber-button text-lg px-8 py-4 border-cyber-green text-cyber-green hover:bg-cyber-green hover:shadow-[0_0_20px_rgba(0,255,0,0.5)]"
                >
                  <Globe className="w-6 h-6 mr-2" />
                  Get Quote
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
