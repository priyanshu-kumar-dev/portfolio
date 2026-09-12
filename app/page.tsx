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
    skills: ["JavaScript", "TypeScript", "HTML", "CSS"],
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
    skills: ["MongoDB", "PostgreSQL", "Mongoose"],
  },
  {
    title: "Tools",
    description: "Development workflow",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Problem Solving",
    description: "Interview preparation",
    skills: ["DSA", "LeetCode", "Problem Solving"],
  },
];

const projectTech = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JWT",
  "REST API",
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
          <div className="mb-5 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-blue-400 sm:text-sm">
            Junior Software Engineer
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Priyanshu Kumar
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg md:text-xl md:leading-8">
            I build modern full-stack web applications and solve programming
            problems using JavaScript, React.js, Node.js and modern software
            engineering practices.
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
              href="YOUR_LINKEDIN_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://leetcode.com/priyanshu420/"
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
                Building practical software with a strong engineering mindset
              </h2>

              <p className="mt-6 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
                I am a Computer Science student passionate about software
                engineering, full-stack development and problem solving. I enjoy
                turning ideas into functional web applications and continuously
                improving my development skills.
              </p>

              <p className="mt-5 leading-7 text-gray-400 sm:leading-8">
                My current focus is strengthening Data Structures & Algorithms,
                building production-oriented applications and developing a
                strong foundation in software engineering. I am particularly
                interested in JavaScript, TypeScript, React.js, Next.js, Node.js
                and databases.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
              {[
                ["Focus", "Software Engineering"],
                ["Development", "Full-Stack Web Development"],
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
              Technologies I use to build full-stack applications and improve my
              software engineering skills.
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
                JavaScript to improve my problem-solving skills and prepare for
                software engineering interviews.
              </p>

              <p className="mt-4 max-w-2xl leading-8 text-gray-400">
                My practice focuses on core problem-solving patterns including
                arrays, strings, hash maps, two pointers, sliding window, binary
                search, stacks and linked lists.
              </p>

              <div className="mt-8">
                <a
                  href="https://leetcode.com/priyanshu420/"
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
              I&apos;m currently looking for internship and junior software
              engineering opportunities. Feel free to connect with me.
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
              href="https://leetcode.com/priyanshu420/"
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
