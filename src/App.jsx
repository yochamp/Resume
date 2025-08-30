import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Cloud, Cpu, Brain, Smartphone } from 'lucide-react'
import profilePhoto from './assets/profile-photo.png'
import './App.css'

function App() {
  const skills = {
    "Programming Languages": ["Python", "C++", "Java", "JavaScript", "TypeScript", "SQL", "C#", "HTML/CSS", "Assembly", "JSON", "Ruby", "XML", "C"],
    "ML/AI": ["LLM Integration", "Agentic Workflows", "Prompt Optimization", "NLP", "Speech-to-Text", "Data Cleaning & Processing", "Decision Trees", "KNN", "Regression", "SVM", "Neural Networks", "K-Means", "NLTK", "Scikit-Learn"],
    "Cloud Software": ["AWS", "Microsoft Azure"],
    "Frameworks & Tools": ["React Native", "React.js", "FastAPI", "Git", "Docker"],
    "Database Management": ["MySQL"],
    "Software/Tools": ["Power BI", "Raspberry Pi", "MATLAB", "OpenCV", "Eclipse", "Anaconda", "Visual Studio Code", "GitHub", "Jira", "Code Blocks"],
    "Operating Systems": ["Windows", "macOS", "UNIX/Linux"]
  }

  const experience = [
    {
      company: "PongFox",
      location: "Bengaluru, Karnataka, India",
      position: "AI & Full Stack Developer",
      period: "Jul 2024 - Present",
      achievements: [
        "Spearheaded the integration of a sophisticated AI agent that converts user speech into direct robot commands",
        "Led the development of the cross-platform PongFox mobile application using React Native",
        "Designed and built a user-friendly web interface for event creation and real-time tournament scoring",
        "Developed and refined low-level C++ firmware for the robot's core microcontroller",
        "Integrated Raspberry Pi with IoT capabilities for live match information display"
      ],
      technologies: ["Python", "C++", "React Native", "React", "JavaScript", "TypeScript", "SQL", "LLM APIs", "FastAPI", "RESTful APIs", "Raspberry Pi", "IoT protocols", "Git", "Docker"]
    },
    {
      company: "Brilliant InfoTech",
      location: "Edison, NJ, USA",
      position: "AWS and Python Developer",
      period: "Jul 2024 - Mar 2025",
      achievements: [
        "Designed and deployed scalable and secure AWS cloud infrastructure using EC2, S3, Lambda, and RDS",
        "Developed and automated key processes using Python, decreasing manual intervention by 40%",
        "Enhanced security and compliance across the AWS environment by 30% by implementing IAM roles, VPC configurations, and encryption protocols"
      ],
      technologies: ["AWS", "Python"]
    },
    {
      company: "General Engineering Corporation (GEC)",
      location: "Pune, Maharashtra, India",
      position: "Power BI Intern",
      period: "Sep 2021 - Nov 2021",
      achievements: [
        "Analyzed machining processes for cost/time efficiency, utilizing Python for data preparation",
        "Developed interactive dashboards and reports using Power BI, improving decision-making by 75%",
        "Optimized Power BI data models achieving a 25% reduction in query response time",
        "Automated data refresh schedules contributing to a 64% increase in profit"
      ],
      technologies: ["Power BI", "Python", "DAX"]
    }
  ]

  const projects = [
    {
      title: "Sentiment Analysis of Movie Reviews",
      description: "Conducted sentiment analysis on movie review datasets using rule-based techniques and a Recurrent Neural Network (RNN). Applied data pre-processing, tokenization, and feature extraction to improve model performance, ultimately achieving 85% accuracy in classifying reviews.",
      technologies: ["Python", "NLTK", "Scikit-Learn", "JavaScript"]
    },
    {
      title: "Medicine Recommendation & Tracking App",
      description: "Created a mobile application for physicians to provide up-to-date medication information and support clinical decision-making. It also helps users manage prescriptions, schedules, and reminders. Constructed a comprehensive and stable MySQL database for the application and executed the project in an Agile environment using Jira.",
      technologies: ["Python", "React Native", "MySQL", "Jira"]
    },
    {
      title: "Robotics and AI for Object Sorting",
      description: "Developed an AI-driven system using a 6-DOF robotic arm for automated object separation. Implemented AI/machine vision algorithms with OpenCV on a Raspberry Pi to identify and classify objects, then programmed the robotic arm's control logic for accurate picking and placement.",
      technologies: ["Python", "OpenCV", "Raspberry Pi", "Robotic Arm Control"]
    },
    {
      title: "Battery Management System for EV",
      description: "Built a simulation model of a Battery Management System (BMS) for electric vehicles using MATLAB and Simulink. Modeled key components like battery cells, thermal effects, and state-of-charge (SoC) estimation algorithms, and integrated safety protocols.",
      technologies: ["MATLAB", "Simulink", "Simscape"]
    },
    {
      title: "Zombie Puzzle Game (Top-Down Shooter)",
      description: "Collaborated in a team to develop a zombie-themed puzzle game, designing top-down mechanics, player controls, and puzzle-based stages. Implemented core game logic, enemy AI behaviors, and level transitions, focusing on performance and user experience.",
      technologies: ["C++", "Unreal Engine"]
    }
  ]

  const education = [
    {
      institution: "Pace University, Seidenberg School of CS and IS",
      location: "New York, NY",
      degree: "Master of Science (MS) in Computer Science",
      period: "Sep 2022 - May 2024",
      concentration: "Artificial Intelligence",
      coursework: "AI (Artificial Intelligence), DL (Deep Learning), ML (Machine Learning), Artificial Neural Networks, Data Structures, Data Analysis, Algorithms and Computing Theory, Database Management Systems, OOP using Java, Agile Methodologies, Python"
    },
    {
      institution: "Manipal Institute of Technology (MAHE MIT)",
      location: "Karnataka, India",
      degree: "Bachelor of Technology (BTech) in Mechatronics",
      period: "Aug 2018 - Jul 2022",
      concentration: "Electric Vehicle Technology"
    }
  ]

  const getSkillIcon = (category) => {
    switch (category) {
      case "Programming Languages": return <Code className="w-5 h-5" />
      case "ML/AI": return <Brain className="w-5 h-5" />
      case "Cloud Software": return <Cloud className="w-5 h-5" />
      case "Frameworks & Tools": return <Cpu className="w-5 h-5" />
      case "Database Management": return <Database className="w-5 h-5" />
      case "Software/Tools": return <Cpu className="w-5 h-5" />
      case "Operating Systems": return <Smartphone className="w-5 h-5" />
      default: return <Code className="w-5 h-5" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-800">Yash Vora</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-slate-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#education" className="text-slate-600 hover:text-blue-600 transition-colors">Education</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
                Hi, I'm <span className="text-blue-600">Yash Vora</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-slate-600 mb-6">
                AI & Full Stack Developer
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl">
                A results-driven Software Developer with expertise in AI integration, robotics, and full-stack development. 
                Specialized in architecting AI agentic workflows and building scalable cloud solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a href="#projects" className="flex items-center gap-2">
                    View Projects
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg">
                  <a href="#contact" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Contact Me
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Yash Vora" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 mb-6">
                A results-driven and detail-oriented Software Developer with over a year of experience, 
                complemented by a Master of Science in Computer Science with an AI specialization.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                I have expertise in AI integration and robotics, with a proven ability to architect and deploy 
                complex AI agentic workflows using LLM APIs to translate natural language into robotic commands.
              </p>
              <p className="text-lg text-slate-600">
                Proficient in full-stack development, spanning low-level C++ firmware, cross-platform React Native 
                mobile applications, and robust Python backends. Skilled in designing, deploying, and optimizing 
                scalable AWS cloud environments.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-slate-600">Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:yashvora2711@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors">yashvora2711@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <a href="tel:+919930852711" className="text-slate-600 hover:text-blue-600 transition-colors">+91 9930852711</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                    <div>
                      <CardTitle className="text-xl text-slate-800">{job.position}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-blue-600">
                        {job.company} • {job.location}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="self-start">
                      {job.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-slate-600 flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <p className="text-slate-600 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg text-slate-800">
                    {getSkillIcon(category)}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                    <div>
                      <CardTitle className="text-xl text-slate-800">{edu.degree}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-blue-600">
                        {edu.institution} • {edu.location}
                      </CardDescription>
                      {edu.concentration && (
                        <p className="text-slate-600 mt-2">Concentration: {edu.concentration}</p>
                      )}
                    </div>
                    <Badge variant="secondary" className="self-start">
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                {edu.coursework && (
                  <CardContent>
                    <p className="text-slate-600">
                      <strong>Relevant Coursework:</strong> {edu.coursework}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-8">Get In Touch</h2>
          <p className="text-lg text-slate-600 mb-8">
            I'm always open to discussing new opportunities and interesting projects. 
            Feel free to reach out if you'd like to connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a href="mailto:yashvora2711@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Send Email
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="https://www.linkedin.com/in/yochamp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="https://github.com/yochamp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-300">
            © 2025 Yash Vora. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

