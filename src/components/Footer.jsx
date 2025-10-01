import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail, Clock, MapPin } from 'lucide-react'

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [timezone, setTimezone] = useState('UTC')

  useEffect(() => {
    // Get user's timezone
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    setTimezone(userTimezone)

    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      timeZone: timezone,
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      timeZone: timezone,
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/ryxu-xo',
      color: 'hover:text-cyber-blue'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com/ryxu_xo',
      color: 'hover:text-cyber-blue'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ryxu-xo',
      color: 'hover:text-cyber-blue'
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:contact@ryxu-xo.tech',
      color: 'hover:text-cyber-green'
    }
  ]

  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cyber-blue rounded-sm flex items-center justify-center">
                <span className="text-dark-bg font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-cyber font-bold neon-text">ryxu-xo</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discord bot developer & creator of Euralink. Building the future of music streaming 
              and bot development with cutting-edge technology.
            </p>
            <div className="flex items-center text-cyber-green text-xs font-mono">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Global • Remote Developer</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-cyber font-bold text-cyber-blue">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-cyber-blue transition-colors text-sm">
                About Me
              </a>
              <a href="#projects" className="block text-gray-300 hover:text-cyber-blue transition-colors text-sm">
                Projects
              </a>
              <a href="#services" className="block text-gray-300 hover:text-cyber-blue transition-colors text-sm">
                Services
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-cyber-blue transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Real-time Clock */}
          <div className="space-y-4">
            <h3 className="text-lg font-cyber font-bold text-cyber-blue">System Status</h3>
            <div className="cyber-card">
              <div className="flex items-center mb-3">
                <Clock className="w-5 h-5 text-cyber-green mr-2" />
                <span className="text-sm font-mono text-cyber-green">LIVE CLOCK</span>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-cyber font-bold text-cyber-blue">
                  {formatTime(currentTime)}
                </div>
                <div className="text-xs text-gray-400 font-mono">
                  {formatDate(currentTime)}
                </div>
                <div className="text-xs text-cyber-green font-mono">
                  {timezone}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-dark-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 border border-dark-border rounded-lg transition-all duration-300 hover:border-cyber-blue hover:bg-cyber-blue/10 text-gray-400 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm font-mono">
                © {new Date().getFullYear()} ryxu-xo. All rights reserved.
              </p>
              <p className="text-cyber-blue text-xs font-mono mt-1">
                Built with React • Tailwind • Framer Motion
              </p>
            </div>
          </div>
        </div>

        {/* Terminal-style bottom border */}
        <div className="mt-8 pt-4 border-t border-cyber-blue/20">
          <div className="flex items-center justify-center space-x-2 text-cyber-blue text-xs font-mono">
            <span>STATUS:</span>
            <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
            <span>ONLINE</span>
            <span className="text-gray-500">•</span>
            <span>UPTIME: {Math.floor((Date.now() - performance.timing.navigationStart) / 1000)}s</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
