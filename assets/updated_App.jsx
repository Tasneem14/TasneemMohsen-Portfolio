import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download, 
  ExternalLink,
  Brain,
  Code,
  Database,
  Eye,
  Cpu,
  BookOpen,
  Award,
  Calendar,
  ChevronDown
} from 'lucide-react'
import aiBackground from './assets/ai_background.jpg'
import neuralNetwork from './assets/neural_network.jpg'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const skills = [
    { name: 'Python', icon: Code },
    { name: 'Machine Learning', icon: Brain },
    { name: 'Deep Learning', icon: Cpu },
    { name: 'Computer Vision', icon: Eye },
    { name: 'TensorFlow/PyTorch', icon: Database },
    { name: 'Data Analysis', icon: BookOpen }
  ]

  const additionalTechnologies = [
    'NumPy', 'Pandas', 'Scikit-learn', 'OpenCV', 'Matplotlib', 'Seaborn',
    'Django', 'WordPress', 'Jupyter Notebook', 'Power BI', 'Tableau',
    'C/C++', 'Java', 'SQL'
  ]

  const projects = [
    {
      title: 'PolySumm: Multimodal-RAG',
      description: 'Scientific paper summarization system using Retrieval-Augmented Generation with multimodal data extraction.',
      tech: ['Python', 'PyTorch', 'Hugging Face', 'React', 'Docker', 'Azure', 'FastAPI'],
      achievement: 'Superior accuracy and efficiency in knowledge acquisition from complex scientific documents',
      type: 'Graduation Project'
    },
    {
      title: 'Vehicle Type Classifier',
      description: 'Python GUI application for vehicle classification using pre-trained CNN model.',
      tech: ['Python', 'TensorFlow', 'Tkinter'],
      achievement: '95.83% test accuracy',
      type: 'Computer Vision'
    },
    {
      title: 'Handwritten Letter Recognition',
      description: 'CNN models for handwritten letter prediction with real-time GUI predictions.',
      tech: ['Python', 'TensorFlow', 'Tkinter'],
      achievement: '99.37% test accuracy',
      type: 'Deep Learning'
    },
    {
      title: 'CNN DeepFake Detection',
      description: 'Convolutional Neural Network to distinguish real from AI-generated faces.',
      tech: ['Python', 'TensorFlow', 'Keras'],
      achievement: '99.55% test accuracy',
      type: 'AI Security'
    }
  ]

  const experiences = [
    {
      title: 'AI Computer Vision Trainee',
      company: 'National Telecommunications Institute - Digital Egypt Youth',
      period: 'Jul 2024 – Present',
      location: 'Cairo, Egypt',
      description: '288+ hours of advanced AI and computer vision training focused on image classification, object detection, segmentation, GANs, and model deployment.',
      highlights: ['132+ hours of soft skills training', 'Capstone project development', '1-month industry OJT']
    },
    {
      title: 'Data Science Intern',
      company: 'Rawmart',
      period: 'Aug 2024 - Sept 2024',
      location: 'Cairo, Egypt',
      description: 'Developed product matching system aligning Arabic customer lists with company database.',
      highlights: ['NLP techniques implementation', 'Similarity scoring optimization', 'Precision/recall evaluation']
    },
    {
      title: 'Data Science Intern',
      company: 'CodeClause',
      period: 'May 2024 - Aug 2024',
      location: 'Remote',
      description: 'Developed data-driven solutions using Python with focus on machine learning algorithms.',
      highlights: ['Large dataset analysis', 'Predictive modeling', 'Interactive visualizations']
    },
    {
      title: 'Robotics and Programming Instructor',
      company: 'StemZone',
      period: 'Dec 2023 - Feb 2024',
      location: 'Cairo, Egypt',
      description: 'Instructed Grades 1 and 2 students in robotics and programming fundamentals.',
      highlights: ['Age-appropriate lesson design', 'Technical concept translation', 'Student engagement']
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-white"
            >
              Tasneem Mohsen
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                    activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={aiBackground} 
            alt="AI Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-slate-900/50" />
        </motion.div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="block">Tasneem Mohsen</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                AI Engineer
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Machine Learning Specialist passionate about leveraging AI to address real-world challenges 
              and drive innovation across industries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-cyan-600 hover:bg-cyan-700 text-white"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={neuralNetwork} 
                alt="Neural Network Visualization" 
                className="rounded-lg shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm an Artificial Intelligence fresh graduate with practical training in machine learning, 
                deep learning, and computer vision. With a strong foundation in Python, TensorFlow, and Django, 
                I have experience building and deploying AI models that solve real-world problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently pursuing advanced training at the National Telecommunications Institute, 
                I've completed over 288 hours of specialized AI and computer vision training, 
                focusing on cutting-edge technologies and industry best practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section (Moved below About Me) */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 text-center text-gray-300"
          >
            <h3 className="text-xl font-semibold text-white">Bachelor of Computers and AI</h3>
            <p className="text-lg">Helwan University, Egypt (2021-2025)</p>
            <p className="text-lg">GPA: 3.56/4.0 (Excellent)</p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/50 border-slate-700 hover:border-cyan-400/50 transition-colors">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl text-white">{exp.title}</CardTitle>
                        <CardDescription className="text-cyan-400 font-medium">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="text-sm text-gray-400 flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-cyan-900/30 text-cyan-300">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-slate-900/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-400/10">
                  <CardHeader>
                    <CardTitle className="text-xl text-white mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-blue-900/30 text-blue-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-cyan-300 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      {project.achievement}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/50 border-slate-700 p-6 flex items-center space-x-4">
                  <skill.icon className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                  <div className="flex-grow">
                    <CardTitle className="text-lg text-white">{skill.name}</CardTitle>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: skills.length * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalTechnologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-green-900/30 text-green-300 text-base px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm always interested in new opportunities and collaborations. Let's discuss how we can work together to create innovative AI solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <span className="text-lg">Tasneemmohsen098@gmail.com</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/50 border-slate-700 p-6">
                <CardTitle className="text-2xl text-white mb-4">Quick Message</CardTitle>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-3 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-cyan-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-3 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-cyan-400"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      className="w-full p-3 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-cyan-400"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com/Tasneem14" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/tasneem-mohsen-a7b1b1227/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Tasneem Mohsen. All rights reserved.</p>
        <p>Made with <a href="https://www.manus.space" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Manus</a></p>
      </footer>
    </div>
  )
}

export default App


