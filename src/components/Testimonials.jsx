import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote, Star, Users, ThumbsUp } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const testimonials = [
    {
      id: 1,
      content: "Because of ryxu-xo, my server operates smoothly and efficiently. My personal bot was helpful and has been running smoothly and the outcome was beyond my expectations. Thank you for your wonderful service!",
      author: "Discord User",
      userId: "916172840800243713",
      rating: 5,
      service: "Discord Bot Development"
    },
    {
      id: 2,
      content: "Shoutout to our bot developer for always delivering useful features, quick fixes and keeping the bot running smooth!! The bot keeps getting better and more fun to use, and it's clear they really care about the community. Super reliable and creative, we definitely appreciate all the effort they've put in!",
      author: "Discord User",
      userId: "1353198664511913994",
      rating: 5,
      service: "Bot Maintenance & Features"
    },
    {
      id: 3,
      content: "Professional, reliable, and always delivers on time. The bot development service exceeded our expectations with advanced features and smooth performance. Highly recommended for any Discord server!",
      author: "Discord User",
      userId: "748355199034327080",
      rating: 5,
      service: "Custom Bot Development"
    }
  ]

  const stats = [
    { icon: Users, label: "Happy Clients", value: "50+", color: "cyber-blue" },
    { icon: Star, label: "5-Star Rating", value: "100%", color: "cyber-green" },
    { icon: ThumbsUp, label: "Success Rate", value: "99%", color: "cyber-purple" }
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

  const TestimonialCard = ({ testimonial, index }) => (
    <motion.div
      variants={itemVariants}
      className="cyber-card group hover:border-cyber-blue transition-all duration-300"
    >
      <div className="flex items-start mb-4">
        <Quote className="w-8 h-8 text-cyber-blue mr-3 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-gray-300 leading-relaxed mb-4 italic">
            "{testimonial.content}"
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cyber-blue font-mono font-medium">
                {testimonial.author}
              </p>
              <p className="text-gray-400 text-sm">
                {testimonial.service}
              </p>
            </div>
            <div className="flex items-center">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-cyber-green fill-current" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="testimonials" className="py-20 bg-dark-surface/30">
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
              <span className="text-gradient">Client Testimonials</span>
            </h2>
            <div className="w-24 h-1 bg-cyber-blue mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What our satisfied clients say about our Discord bot development services
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={stat.label} className="cyber-card text-center">
                <div className={`w-16 h-16 bg-${stat.color}/20 border border-${stat.color}/30 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 text-${stat.color}`} />
                </div>
                <h3 className="text-3xl font-cyber font-bold text-cyber-blue mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-300 font-mono">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="cyber-card max-w-4xl mx-auto">
              <h3 className="text-3xl font-cyber font-bold text-cyber-blue mb-4">
                Join Our Satisfied Clients
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Ready to experience the same level of service? Let's discuss your Discord bot needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="cyber-button text-lg px-8 py-4"
                >
                  <Users className="w-6 h-6 mr-2" />
                  Get Your Bot
                </a>
                <a
                  href="https://github.com/ryxu-xo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button text-lg px-8 py-4 border-cyber-green text-cyber-green hover:bg-cyber-green hover:shadow-[0_0_20px_rgba(0,255,0,0.5)]"
                >
                  <Star className="w-6 h-6 mr-2" />
                  View Portfolio
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
