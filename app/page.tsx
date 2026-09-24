"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "DSA", href: "#dsa" },
  {
    label: "Resume",
    href: "/Priyanshu_Kumar_Resume.pdf",
    download: true,
  },
  { label: "Contact", href: "#contact" },
];

const skillCategories = [
  {
    title: "Languages",
    description: "Programming fundamentals",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    description: "Modern web interfaces",
    skills: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "Server-side development",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    title: "Databases",
    description: "Data storage & management",
    skills: ["MongoDB", "MongoDB Atlas", "PostgreSQL", "Mongoose"],
  },
  {
    title: "Tools",
    description: "Development workflow",
    skills: ["Git", "GitHub", "npm", "VS Code"],
  },
  {
    title: "Integration",
    description: "API and third-party service integration",
    skills: ["REST API", "Postman", "Razorpay", "2Factor", "Cloudinary"],
  },
  {
    title: "Deployment",
    description: "Application deployment and hosting",
    skills: ["Render", "Vercel", "Git", "GitHub"],
  },
  {
    title: "Problem Solving",
    description: "Interview preparation",
    skills: ["DSA", "LeetCode", "Problem Solving"],
  },
  {
    title: "AI Tools",
    description: "AI-assisted development and productivity",
    skills: ["ChatGPT", "Claude", "GitHub Copilot"],
  },
];

const projectTech = [
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MongoDB Atlas",
  "JWT",
  "REST API",
  "2Factor",
  "Razorpay",
  "Cloudinary",
];

const dsaTopics = [
  "Arrays & Strings",
  "Hash Map & Set",
  "Two Pointers",
  "Sliding Window",
  "Binary Search",
  "Stack & Linked List",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080808] text-white">
      {/* ================= NAVBAR ================= */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080808]/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={closeMenu}
              className="group flex items-center gap-2"
            >
              <span className="text-lg font-bold tracking-tight sm:text-xl">
                Priyanshu Kumar
              </span>

              <span className="h-2 w-2 rounded-full bg-blue-500 transition group-hover:scale-125" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-5 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  download={item.download}
                  className="px-1 py-2 text-sm font-medium text-gray-400 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop GitHub */}
            <a
              href="https://github.com/priyanshu-kumar-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-medium text-gray-200 transition hover:bg-white/[0.08] hover:text-white lg:block"
            >
              GitHub
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] text-gray-200 transition hover:bg-white/[0.08] lg:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <span className="text-2xl leading-none">×</span>
              ) : (
                <span className="text-xl leading-none">☰</span>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden lg:hidden"
              >
                <div className="border-t border-white/10 py-4">
                  <div className="flex flex-col gap-1">
                    {navItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        download={item.download}
                        onClick={closeMenu}
                        className="rounded-lg px-3 py-3 text-sm font-medium text-gray-400 transition hover:bg-white/[0.05] hover:text-white"
                      >
                        {item.label}
                      </a>
                    ))}

                    <a
                      href="https://github.com/priyanshu-kumar-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="mt-2 rounded-lg border border-white/10 px-3 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/[0.05] hover:text-white"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center px-5 pb-16 pt-28 sm:px-6 lg:px-8"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl sm:h-96 sm:w-96" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="group relative mb-6 inline-flex items-center overflow-hidden rounded-full border border-blue-400/40 bg-blue-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-300 shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-300 hover:scale-105 hover:border-blue-400/70 hover:bg-blue-500/15 hover:shadow-[0_0_35px_rgba(59,130,246,0.3)] sm:px-7 sm:py-3.5 sm:text-base">
            {/* Animated shine */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

            {/* Pulsing dot */}
            <span className="relative mr-3 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
            </span>

            <span className="relative">Full Stack Developer</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Priyanshu Kumar
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg md:text-xl md:leading-8">
            I build modern full-stack web applications across the frontend,
            backend, databases, APIs, integrations and deployment using the MERN
            stack and modern web technologies.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              View Projects
            </a>

            <a
              href="/Priyanshu_Kumar_Resume.pdf"
              download
              className="rounded-lg border border-white/15 px-6 py-3 font-medium transition hover:bg-white/[0.07]"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-500">
            <a
              href="https://github.com/priyanshu-kumar-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/priyanshukumar-sahu/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://leetcode.com/u/priyanshu420/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LeetCode ↗
            </a>
          </div>

          <div className="mt-12 text-xs text-gray-600">Scroll to explore</div>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-14"
          >
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                About Me
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Building complete products across the full stack
              </h2>

              <p className="mt-6 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
                I am a Computer Science student and Full Stack Developer focused
                on building complete, real-world web applications. I enjoy
                turning ideas into functional products and working across
                frontend development, backend APIs, databases, authentication
                and deployment.
              </p>

              <p className="mt-5 leading-7 text-gray-400 sm:leading-8">
                My current focus is strengthening Data Structures & Algorithms,
                building production-oriented applications and improving my
                full-stack engineering skills. I work mainly with JavaScript,
                React.js, Tailwind CSS, Node.js, Express.js, MongoDB, MongoDB
                Atlas and REST APIs, while continuing to learn TypeScript and
                System Design.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
              {[
                ["Role", "Full Stack Developer"],
                ["Development", "Frontend + Backend + Database"],
                ["Problem Solving", "Data Structures & Algorithms"],
                ["Current Project", "ApnaBazar"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <p className="text-sm text-gray-500">{label}</p>

                  <p className="mt-2 font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="border-y border-white/10 bg-white/[0.015]"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
              Technical Skills
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Technologies & Tools
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-400">
              Technologies I use to design, build, integrate and deploy
              full-stack web applications.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skillCategories.map((category) => (
                <motion.div
                  key={category.title}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6"
                >
                  <h3 className="text-lg font-semibold">{category.title}</h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {category.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-gray-300 transition hover:border-blue-500/40 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FULL STACK WORKFLOW ================= */}
      <section className="border-y border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
              Full Stack Workflow
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From UI to Production
            </h2>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
              {[
                ["01", "Frontend", "React.js • Tailwind CSS"],
                ["02", "Backend", "Node.js • Express.js"],
                ["03", "APIs", "REST • JWT • OTP"],
                ["04", "Database", "MongoDB • Atlas"],
                ["05", "Integrations", "Razorpay • Cloudinary"],
                ["06", "Deployment", "Render • Vercel"],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-left transition hover:border-blue-500/30"
                >
                  <span className="text-xs font-semibold text-blue-400">
                    {number}
                  </span>
                  <h3 className="mt-3 font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECT ================= */}
      <section id="projects">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
              Featured Project
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              ApnaBazar
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-400">
              A full-stack e-commerce and local services platform designed to
              demonstrate practical software engineering and full-stack
              development skills.
            </p>

            <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">
              <div className="grid md:grid-cols-2">
                <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600/15 via-transparent to-transparent p-8 sm:min-h-[380px]">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-center"
                  >
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-yellow-400/20 bg-yellow-400/10 sm:h-28 sm:w-28">
                      <span className="text-6xl font-black text-yellow-400 sm:text-7xl">
                        A
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold sm:text-3xl">
                      ApnaBazar
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                      E-Commerce & Local Services
                    </p>
                  </motion.div>
                </div>

                <div className="p-6 sm:p-8 md:p-10">
                  <div className="flex flex-wrap gap-2">
                    {projectTech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-7 text-2xl font-bold">
                    Full-Stack E-Commerce Platform
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    ApnaBazar combines online shopping and local services into a
                    single web application. The project includes authentication,
                    product browsing, cart functionality, address management,
                    bookings and online payments.
                  </p>

                  <div className="mt-7">
                    <p className="text-sm font-semibold text-white">
                      Key Features
                    </p>

                    <ul className="mt-4 space-y-3 text-sm text-gray-400">
                      <li className="flex gap-3">
                        <span className="text-blue-400">✓</span>
                        <span>User authentication with OTP and JWT</span>
                      </li>

                      <li className="flex gap-3">
                        <span className="text-blue-400">✓</span>
                        <span>Product browsing, cart and order flow</span>
                      </li>

                      <li className="flex gap-3">
                        <span className="text-blue-400">✓</span>
                        <span>Local services and booking functionality</span>
                      </li>

                      <li className="flex gap-3">
                        <span className="text-blue-400">✓</span>
                        <span>Online payment integration with Razorpay</span>
                      </li>

                      <li className="flex gap-3">
                        <span className="text-blue-400">✓</span>
                        <span>
                          Cloud-based image management with Cloudinary
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="https://apnabazar-1.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium transition hover:bg-blue-500"
                    >
                      Live Demo ↗
                    </a>

                    <a
                      href="https://github.com/priyanshu-kumar-dev/ApnaBazar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white/15 px-5 py-2.5 text-center text-sm font-medium transition hover:bg-white/[0.07]"
                    >
                      View GitHub ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= DSA ================= */}
      <section id="dsa" className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center"
          >
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                Problem Solving
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Data Structures & Algorithms
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-gray-400">
                I regularly practice Data Structures and Algorithms using
                JavaScript to strengthen my problem-solving skills and prepare
                for software engineering interviews.
              </p>

              <p className="mt-4 max-w-2xl leading-8 text-gray-400">
                My practice focuses on core problem-solving patterns including
                arrays, strings, hash maps, two pointers, sliding window, binary
                search, stacks and linked lists.
              </p>

              <div className="mt-8">
                <a
                  href="https://leetcode.com/u/priyanshu420/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-lg bg-orange-500 px-5 py-3 font-medium transition hover:bg-orange-400"
                >
                  View LeetCode Profile ↗
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7">
              <p className="text-sm text-gray-500">Current Focus</p>

              <h3 className="mt-2 text-2xl font-bold">
                Problem Solving with JavaScript
              </h3>

              <div className="mt-6 space-y-4">
                {dsaTopics.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                      ✓
                    </span>

                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
              Contact
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
              Let&apos;s build something together
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              I&apos;m currently looking for Full Stack Developer, MERN Stack
              and software development internship opportunities. Feel free to
              connect with me.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="mailto:priyanshukumarsahu123@gmail.com"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
              >
                Email Me
              </a>

              <a
                href="https://github.com/priyanshu-kumar-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 px-6 py-3 font-medium transition hover:bg-white/[0.07]"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/priyanshukumar-sahu/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 px-6 py-3 font-medium transition hover:bg-white/[0.07]"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 sm:px-6 md:flex-row lg:px-8">
          <p className="text-center text-sm text-gray-500 md:text-left">
            © 2026 Priyanshu Kumar. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-500">
            <a
              href="https://github.com/priyanshu-kumar-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/priyanshukumar-sahu/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/priyanshu420/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LeetCode
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
