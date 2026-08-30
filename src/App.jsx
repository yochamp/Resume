import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Brain, CircuitBoard, Cog, Wrench, Bot, LineChart, Download, Menu, X, Globe, Smartphone, Play, Youtube, Sun, Moon, Monitor } from 'lucide-react'
import profilePhoto from './assets/profile-photo.png'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  // "system" follows the OS setting and is the default until the visitor chooses.
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "system"
    } catch {
      // storage blocked (private mode, cookies off) - fall back to system
      return "system"
    }
  })

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const apply = () => {
      const isDark = theme === "dark" || (theme === "system" && mq.matches)
      document.documentElement.classList.toggle("dark", isDark)
    }
    apply()

    try {
      if (theme === "system") localStorage.removeItem("theme")
      else localStorage.setItem("theme", theme)
    } catch {
      // storage blocked - the choice just will not persist
    }

    if (theme !== "system") return
    mq.addEventListener("change", apply)
    return () => mq.removeEventListener("change", apply)
  }, [theme])

  const resumeUrl = `${import.meta.env.BASE_URL}Yash_Vora_Resume.pdf`

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" }
  ]

  const highlights = [
    { value: "7", label: "actuators driven from a single control loop" },
    { value: "±2.5 cm", label: "shot-to-shot ball placement" },
    { value: "<0.5 s", label: "app command to motor response" },
    { value: "~5 s", label: "device pairing, down from 30–45 min" }
  ]

  const skills = {
    "Embedded & Firmware": ["C++", "C", "Microcontrollers & SBCs (ESP32, MSP432, RPi 4 & 5)", "PWM Generation", "ADC/GPIO", "Real-time Control Loops"],
    "Motor & Actuator Control": ["BLDC with ESCs", "Stepper Drivers", "Servos", "Multi-axis Coordination", "ESC Tuning & Calibration"],
    "Hardware & Sensors": ["Piezoelectric Sensor Integration", "ESC/Servo Interfacing", "Actuator Wiring", "Soldering & Assembly", "Bench Debugging"],
    "Robotics & Vision": ["ROS (coursework)", "OpenCV", "6-DOF Arm Control", "Machine Vision", "BLE Device Networks"],
    "Modeling & Simulation": ["MATLAB", "Simulink", "Simscape"],
    "Software": ["Python (FastAPI)", "React Native", "TypeScript", "JavaScript", "SQL", "Git", "AWS"],
    "AI/ML": ["LLM Integration", "Agentic Workflows", "Prompt Optimization", "Speech-to-Text", "Scikit-Learn", "NLTK"]
  }

  const experience = [
    {
      company: "BodhiLabs (PongFox)",
      location: "Bengaluru, Karnataka, India",
      position: "AI & Full Stack Developer (Robotics)",
      period: "Jul 2024 - Present",
      achievements: [
        "Developed C++ firmware on ESP32 for a robotic table-tennis trainer driving seven actuators — 3× BLDC motors, 1× stepper, 3× servos — coordinating ball speed, spin, feed rate and 2-axis head aiming from a single control loop.",
        "Tunes ESC parameters and PWM modulation across the BLDC drivetrain, holding shot-to-shot ball placement within ±2.5 cm of target on a given unit despite mechanical variation between wheels.",
        "Engineered the sensor-integrated \"SmartPad\" accessory: conditioned piezoelectric sensor output into an ESP32 ADC to detect ball impacts and stream events over BLE to the robot controller, automating serve triggering.",
        "Reworked BLE pairing across robot, SmartPad and mobile app, replacing a scheme that required each device MAC address to be hard-coded into its counterpart with automatic discovery and connection — cutting per-unit pairing from 30–45 minutes of manual provisioning to roughly 5 seconds.",
        "Integrated an LLM-based voice pipeline converting natural speech into executable robot command sequences at 90% command accuracy, covering prompt design, response parsing and validation before commands reach the control firmware.",
        "Leads development of the cross-platform React Native app and Python/SQL backend behind it, delivering end-to-end latency of under 0.5 s from app command to motor response.",
        "Diagnoses and resolves faults across the full stack — motor and ESC behaviour, sensor anomalies, BLE dropouts, firmware-to-app integration — isolating root causes between hardware, firmware and application layers."
      ],
      technologies: ["Embedded C++", "ESP32", "BLDC/ESC", "PWM", "BLE", "Piezoelectric Sensors", "Python", "React Native", "React", "TypeScript", "JavaScript", "SQL", "FastAPI", "RESTful APIs", "LLM APIs", "Raspberry Pi", "IoT protocols", "Git"],
      links: [
        { label: "pongfox.com", href: "https://pongfox.com", icon: "globe" },
        { label: "App Store", href: "https://apps.apple.com/us/app/pongfox-table-tennis-robot/id1497681103", icon: "ios" },
        { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.pongfox", icon: "android" },
        { label: "YouTube", href: "https://www.youtube.com/@PongFoxTabletennis/featured", icon: "youtube" }
      ]
    },
    {
      company: "General Engineering Corporation (GEC)",
      location: "Pune, Maharashtra, India",
      position: "Engineering Intern",
      period: "Sep 2021 - Nov 2021",
      achievements: [
        "Carried out the initial Raspberry Pi 4 integrations across 8 different machines for an internal IoT system, replacing manual shift-end logging with live per-machine progress in a single view.",
        "Analyzed machining processes for cost and cycle-time efficiency, building Python data pipelines to prepare the underlying data."
      ],
      technologies: ["Raspberry Pi 4", "Python", "IoT", "Sensor Integration"]
    }
  ]

  const projects = [
    {
      title: "Battery Management System for Electric Vehicles",
      description: "BTech final year project. Modeled both active and passive cell-balancing BMS architectures in MATLAB, Simulink and Simscape, covering cell electrical behavior, thermal effects, current measurement and state-of-charge (SoC) estimation algorithms. Implemented monitoring protocols for charge/discharge cycling and temperature thresholds, with protective action on limit violation. Ran extended-duration and varied-load simulations to quantify the capacity degradation prevented versus an unmanaged pack and to validate system stability under load.",
      technologies: ["MATLAB", "Simulink", "Simscape", "Active & Passive Cell Balancing", "SoC Estimation", "Thermal Modeling"]
    },
    {
      title: "Robotics and AI for Object Sorting",
      description: "Built a 6-DOF robotic arm sorting cell using OpenCV machine vision on a Raspberry Pi to classify objects by visual features. Programmed the pick-and-place control logic and calibrated the integrated system for real-time accuracy and repeatability.",
      technologies: ["Python", "OpenCV", "Raspberry Pi", "6-DOF Arm Control", "Machine Vision"]
    },
    {
      title: "Sentiment Analysis of Movie Reviews",
      description: "Conducted sentiment analysis on movie review datasets using rule-based techniques and a Recurrent Neural Network (RNN). Applied data pre-processing, tokenization, and feature extraction to improve model performance, ultimately achieving 85% accuracy in classifying reviews.",
      technologies: ["Python", "NLTK", "Scikit-Learn", "JavaScript"]
    },
    {
      title: "Medicine Recommendation & Tracking App",
      description: "Created a mobile application for physicians to provide up-to-date medication information and support clinical decision-making. It also helps users manage prescriptions, schedules, and reminders. Constructed a comprehensive and stable MySQL database for the application and executed the project in an Agile environment using Jira.",
      technologies: ["Python", "React Native", "MySQL", "Jira"]
    }
  ]

  const education = [
    {
      institution: "Pace University, Seidenberg School of CS and IS",
      location: "New York, NY",
      degree: "Master of Science (MS) in Computer Science",
      period: "Sep 2022 - May 2024",
      concentration: "Artificial Intelligence",
      gpa: "GPA: 3.82 / 4.0",
      coursework: "AI (Artificial Intelligence), DL (Deep Learning), ML (Machine Learning), Artificial Neural Networks, Data Structures, Data Analysis, Algorithms and Computing Theory, Database Management Systems, OOP using Java, Agile Methodologies, Python"
    },
    {
      institution: "Manipal Institute of Technology (MAHE MIT)",
      location: "Karnataka, India",
      degree: "Bachelor of Technology (BTech) in Mechatronics",
      period: "Aug 2018 - Jul 2022",
      concentration: "Electric Vehicle Technology",
      gpa: "CGPA: 8.67 / 10",
      coursework: "Robotics & ROS, Control Systems, Embedded Systems, Power Electronics, Machine Vision"
    }
  ]

  const getLinkIcon = (icon) => {
    switch (icon) {
      case "globe": return <Globe className="h-3.5 w-3.5" />
      case "ios": return <Smartphone className="h-3.5 w-3.5" />
      case "android": return <Play className="h-3.5 w-3.5" />
      case "youtube": return <Youtube className="h-3.5 w-3.5" />
      default: return <ExternalLink className="h-3.5 w-3.5" />
    }
  }

  const getSkillIcon = (category) => {
    switch (category) {
      case "Embedded & Firmware": return <CircuitBoard className="w-5 h-5" />
      case "Motor & Actuator Control": return <Cog className="w-5 h-5" />
      case "Hardware & Sensors": return <Wrench className="w-5 h-5" />
      case "Robotics & Vision": return <Bot className="w-5 h-5" />
      case "Modeling & Simulation": return <LineChart className="w-5 h-5" />
      case "Software": return <Code className="w-5 h-5" />
      case "AI/ML": return <Brain className="w-5 h-5" />
      default: return <Code className="w-5 h-5" />
    }
  }

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--body-strong)] selection:bg-[var(--accent-soft)] selection:text-[var(--heading)]">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-[var(--accent-soft)] blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-[var(--glow-2)] blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-[var(--glow-3)] blur-[120px]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            opacity: 'var(--grid-opacity)'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-[var(--line)] bg-[var(--bg-blur)] backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#top" className="text-lg font-bold tracking-tight text-[var(--heading)]">
              Yash Vora
            </a>
            <div className="hidden md:flex md:items-center md:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--body)] transition-colors hover:text-[var(--accent)]"
                >
                  {link.label}
                </a>
              ))}
              <ThemeToggle theme={theme} setTheme={setTheme} />
              <Button
                asChild
                size="sm"
                className="border-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500"
              >
                <a href={resumeUrl} download className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle theme={theme} setTheme={setTheme} />
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="-mr-2 p-2 text-[var(--body-strong)] transition-colors hover:text-[var(--accent)]"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="mt-4 flex flex-col border-t border-[var(--line)] pt-4 md:hidden">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 text-[var(--body)] transition-colors hover:text-[var(--accent)]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={resumeUrl}
                download
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 py-2 font-medium text-[var(--accent)]"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="top" className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-14 lg:flex-row">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--surface-2)] px-4 py-1.5 text-xs font-medium tracking-wide text-[var(--accent)] uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                Robotics &middot; Embedded &middot; Firmware
              </div>
              <h1 className="mb-5 text-5xl font-bold tracking-tight text-[var(--heading)] lg:text-7xl">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Yash Vora
                </span>
              </h1>
              <h2 className="mb-6 text-2xl font-medium text-[var(--body-strong)] lg:text-3xl">
                Robotics &amp; Embedded Systems Engineer
              </h2>
              <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-[var(--body)] lg:mx-0">
                I co-develop the embedded firmware and control software behind a commercial robotics product &mdash; ESP32
                firmware driving seven actuators, ESC-based BLDC motor control, piezoelectric sensing and BLE device
                networking &mdash; along with the mobile app and backend that drive the robot.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="border-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 transition-all hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/40"
                >
                  <a href="#projects" className="flex items-center gap-2">
                    View Projects
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[var(--line-strong)] bg-[var(--surface-2)] text-[var(--body-strong)] hover:border-[var(--accent-border)] hover:bg-[var(--surface-hover)] hover:text-[var(--heading)]"
                >
                  <a href={resumeUrl} download className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[var(--line-strong)] bg-[var(--surface-2)] text-[var(--body-strong)] hover:border-[var(--accent-border)] hover:bg-[var(--surface-hover)] hover:text-[var(--heading)]"
                >
                  <a href="#contact" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contact Me
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-500/30 via-blue-600/20 to-transparent blur-2xl" />
                <div className="relative h-72 w-72 overflow-hidden rounded-full border border-[var(--line-strong)] p-1.5 lg:h-80 lg:w-80">
                  <div className="h-full w-full overflow-hidden rounded-full ring-1 ring-[var(--accent-ring)]">
                    <img src={profilePhoto} alt="Yash Vora" className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Verified highlight metrics */}
          <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 backdrop-blur-sm transition-colors hover:border-[var(--accent-border)]"
              >
                <div className="mb-1 text-2xl font-bold text-[var(--accent)] lg:text-3xl">{item.value}</div>
                <div className="text-xs leading-relaxed text-[var(--muted)]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-[var(--line)] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading kicker="About" title="Who I am" />
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-[var(--body)]">
                An AI-driven mechatronics engineer with over two years on a commercial robotics product, backed by a
                Master of Science in Computer Science with a concentration in Artificial Intelligence.
              </p>
              <p className="text-lg leading-relaxed text-[var(--body)]">
                I develop the embedded firmware and control software end to end &mdash; C++ firmware on ESP32 driving seven
                actuators, ESC-based BLDC motor control, piezoelectric sensing conditioned into the ADC, and BLE device
                networking across robot, accessory and app.
              </p>
              <p className="text-lg leading-relaxed text-[var(--body)]">
                My work spans low-level motor control through to the React Native app and Python backend that drive the
                robot, isolating root causes between the hardware, firmware and application layers.
              </p>
            </div>
            <div className="space-y-3 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4 rounded-xl px-2 py-2.5">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="text-[var(--body-strong)]">India</span>
              </div>
              <a
                href="mailto:yashvora2711@gmail.com"
                className="flex items-center gap-4 rounded-xl px-2 py-2.5 transition-colors hover:bg-[var(--surface-hover)]"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="text-[var(--body-strong)] transition-colors hover:text-[var(--accent)]">yashvora2711@gmail.com</span>
              </a>
              <a
                href="tel:+919930852711"
                className="flex items-center gap-4 rounded-xl px-2 py-2.5 transition-colors hover:bg-[var(--surface-hover)]"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="text-[var(--body-strong)] transition-colors hover:text-[var(--accent)]">+91 9930852711</span>
              </a>
              <div className="flex gap-3 pt-3">
                <a
                  href="https://www.linkedin.com/in/yochamp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line-strong)] text-[var(--body)] transition-colors hover:border-[var(--accent-border)] hover:text-[var(--accent)]"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/yochamp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line-strong)] text-[var(--body)] transition-colors hover:border-[var(--accent-border)] hover:text-[var(--accent)]"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="border-t border-[var(--line)] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading kicker="Experience" title="Professional Experience" />
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card
                key={index}
                className="group border-[var(--line)] bg-[var(--surface)] backdrop-blur-sm transition-colors hover:border-[var(--accent-border)]"
              >
                <CardHeader>
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <CardTitle className="text-xl text-[var(--heading)]">{job.position}</CardTitle>
                      <CardDescription className="mt-1 text-base font-medium text-[var(--accent)]">
                        {job.company} &middot; {job.location}
                      </CardDescription>
                    </div>
                    <Badge className="self-start border-[var(--line-strong)] bg-[var(--surface-2)] font-normal text-[var(--body)]">
                      {job.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-3">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 leading-relaxed text-[var(--body)]">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-[var(--line-strong)] bg-[var(--surface)] text-xs font-normal text-[var(--body)]"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {job.links && (
                    <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--line)] pt-5">
                      {job.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-[var(--line-strong)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--body-strong)] transition-colors hover:border-[var(--accent-border)] hover:bg-[var(--surface-hover)] hover:text-[var(--accent)]"
                        >
                          {getLinkIcon(link.icon)}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-t border-[var(--line)] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading kicker="Projects" title="Featured Projects" />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="flex h-full flex-col border-[var(--line)] bg-[var(--surface)] backdrop-blur-sm transition-colors hover:border-[var(--accent-border)]"
              >
                <CardHeader>
                  <div className="mb-1 font-mono text-xs text-[var(--accent)]/70">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <CardTitle className="text-lg leading-snug text-[var(--heading)]">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="mb-5 flex-grow text-sm leading-relaxed text-[var(--body)]">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-[var(--line-strong)] bg-[var(--surface)] text-xs font-normal text-[var(--body)]"
                      >
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
      <section id="skills" className="border-t border-[var(--line)] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading kicker="Skills" title="Technical Skills" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card
                key={index}
                className="border-[var(--line)] bg-[var(--surface)] backdrop-blur-sm transition-colors hover:border-[var(--accent-border)]"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-base text-[var(--heading)]">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/10 text-[var(--accent)]">
                      {getSkillIcon(category)}
                    </span>
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, idx) => (
                      <Badge
                        key={idx}
                        className="border-[var(--line-strong)] bg-[var(--surface-2)] text-xs font-normal text-[var(--body-strong)] hover:bg-[var(--surface-hover)]"
                      >
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
      <section id="education" className="border-t border-[var(--line)] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading kicker="Education" title="Education" />
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="border-[var(--line)] bg-[var(--surface)] backdrop-blur-sm transition-colors hover:border-[var(--accent-border)]"
              >
                <CardHeader>
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <CardTitle className="text-xl text-[var(--heading)]">{edu.degree}</CardTitle>
                      <CardDescription className="mt-1 text-base font-medium text-[var(--accent)]">
                        {edu.institution} &middot; {edu.location}
                      </CardDescription>
                      {edu.concentration && (
                        <p className="mt-3 text-[var(--body)]">Concentration: {edu.concentration}</p>
                      )}
                      {edu.gpa && <p className="mt-1 font-medium text-[var(--body-strong)]">{edu.gpa}</p>}
                    </div>
                    <Badge className="self-start border-[var(--line-strong)] bg-[var(--surface-2)] font-normal text-[var(--body)]">
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                {edu.coursework && (
                  <CardContent>
                    <p className="text-sm leading-relaxed text-[var(--body)]">
                      <span className="font-medium text-[var(--body-strong)]">Relevant coursework:</span> {edu.coursework}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-[var(--line)] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading kicker="Contact" title="Get In Touch" centered />
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[var(--body)]">
            I&apos;m always open to discussing robotics and embedded work, new opportunities and interesting problems.
            Feel free to reach out if you&apos;d like to connect.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              size="lg"
              className="border-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500"
            >
              <a href="mailto:yashvora2711@gmail.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Send Email
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[var(--line-strong)] bg-[var(--surface-2)] text-[var(--body-strong)] hover:border-[var(--accent-border)] hover:bg-[var(--surface-hover)] hover:text-[var(--heading)]"
            >
              <a href={resumeUrl} download className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[var(--line-strong)] bg-[var(--surface-2)] text-[var(--body-strong)] hover:border-[var(--accent-border)] hover:bg-[var(--surface-hover)] hover:text-[var(--heading)]"
            >
              <a
                href="https://www.linkedin.com/in/yochamp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[var(--line-strong)] bg-[var(--surface-2)] text-[var(--body-strong)] hover:border-[var(--accent-border)] hover:bg-[var(--surface-hover)] hover:text-[var(--heading)]"
            >
              <a
                href="https://github.com/yochamp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--line)] px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[var(--muted)] sm:flex-row">
          <p>&copy; 2026 Yash Vora. All rights reserved.</p>
          <p>Built with React, Vite and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}

function ThemeToggle({ theme, setTheme }) {
  const options = [
    { value: "light", label: "Light", icon: <Sun className="h-4 w-4" /> },
    { value: "system", label: "System", icon: <Monitor className="h-4 w-4" /> },
    { value: "dark", label: "Dark", icon: <Moon className="h-4 w-4" /> }
  ]

  return (
    <div
      role="group"
      aria-label="Colour theme"
      className="inline-flex items-center gap-0.5 rounded-lg border border-[var(--line-strong)] bg-[var(--surface)] p-0.5"
    >
      {options.map(({ value, label, icon }) => (
        <button
          key={value}
          type="button"
          onClick={() => setTheme(value)}
          aria-label={`${label} theme`}
          aria-pressed={theme === value}
          title={`${label} theme`}
          className={`rounded-md p-1.5 transition-colors ${
            theme === value
              ? "bg-[var(--surface-hover)] text-[var(--accent)]"
              : "text-[var(--body)] hover:text-[var(--accent)]"
          }`}
        >
          {icon}
        </button>
      ))}
    </div>
  )
}

function SectionHeading({ kicker, title, centered = false }) {
  return (
    <div className={centered ? "mb-8 text-center" : "mb-12"}>
      <div className="mb-3 text-xs font-medium tracking-[0.2em] text-[var(--accent)] uppercase">{kicker}</div>
      <h2 className="text-3xl font-bold tracking-tight text-[var(--heading)] lg:text-4xl">{title}</h2>
      <div
        className={
          centered
            ? "mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
            : "mt-4 h-px w-24 bg-gradient-to-r from-cyan-500 to-transparent"
        }
      />
    </div>
  )
}

export default App

