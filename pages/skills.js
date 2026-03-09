import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa'

import {
  SiHtml5,
  SiCss3,
  SiMaterialui,
  SiCplusplus,
  SiGooglecloud,
  SiJavascript,
  SiMysql,
  SiPostman,
  SiSelenium,
  SiSpringboot,
  SiTerraform
} from 'react-icons/si'

const allSkills = [
  { name: 'React', icon: <FaReact />, color: 'text-sky-500', shadow: 'shadow-sky-500/20' },
  { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-500', shadow: 'shadow-yellow-500/20' },
  { name: 'HTML5', icon: <SiHtml5 />, color: 'text-orange-500', shadow: 'shadow-orange-500/20' },
  { name: 'CSS3', icon: <SiCss3 />, color: 'text-blue-500', shadow: 'shadow-blue-500/20' },
  { name: 'Material UI', icon: <SiMaterialui />, color: 'text-blue-400', shadow: 'shadow-blue-400/20' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500', shadow: 'shadow-green-500/20' },
  { name: 'Spring Boot', icon: <SiSpringboot />, color: 'text-green-600', shadow: 'shadow-green-600/20' },
  { name: 'Java', icon: <FaJava />, color: 'text-red-500', shadow: 'shadow-red-500/20' },
  { name: 'Python', icon: <FaPython />, color: 'text-yellow-400', shadow: 'shadow-yellow-400/20' },
  { name: 'C++', icon: <SiCplusplus />, color: 'text-blue-600', shadow: 'shadow-blue-600/20' },
  { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-600', shadow: 'shadow-blue-600/20' },
  { name: 'Postman', icon: <SiPostman />, color: 'text-orange-500', shadow: 'shadow-orange-500/20' },
  { name: 'Selenium', icon: <SiSelenium />, color: 'text-green-500', shadow: 'shadow-green-500/20' },
  { name: 'AWS', icon: <FaAws />, color: 'text-orange-400', shadow: 'shadow-orange-400/20' },
  { name: 'GCP', icon: <SiGooglecloud />, color: 'text-blue-500', shadow: 'shadow-blue-500/20' },
  { name: 'Docker', icon: <FaDocker />, color: 'text-blue-500', shadow: 'shadow-blue-500/20' },
  { name: 'Terraform', icon: <SiTerraform />, color: 'text-purple-500', shadow: 'shadow-purple-500/20' },
  { name: 'Linux', icon: <FaLinux />, color: 'text-yellow-500', shadow: 'shadow-yellow-500/20' },
  { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-500', shadow: 'shadow-orange-500/20' },
  { name: 'GitHub', icon: <FaGithub />, color: 'text-gray-800 dark:text-white', shadow: 'shadow-gray-800/20' },
  { name: 'CI/CD', icon: <FaGitAlt />, color: 'text-orange-400', shadow: 'shadow-orange-400/20' },
]

const SkillBubble = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: index * 0.05
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className={`flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border border-gray-100 bg-white shadow-lg transition-all dark:border-gray-800 dark:bg-zinc-900 md:h-24 md:w-24 ${skill.shadow}`}
      >
        <span className={`text-3xl md:text-4xl ${skill.color}`}>
          {skill.icon}
        </span>
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="absolute -bottom-10 z-10 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1 text-xs font-bold text-white shadow-xl dark:bg-white dark:text-gray-900"
          >
            {skill.name}
            <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-900 dark:bg-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <>
      <PageSEO title={`Skills - ${siteMetadata.author}`} description="My Technical Universe" />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
          >
            My <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Tech Stack</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-lg text-gray-500 dark:text-gray-400"
          >
           Explore the technologies I use.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {allSkills.map((skill, index) => (
            <SkillBubble key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Expertise Section - Simplified and Integrated */}
        <div className="mt-32 border-t border-gray-100 pt-20 dark:border-gray-800">
          <div className="grid gap-12 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Full-Stack mastery</h3>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                End-to-end development focused on high-performance architectures and seamless user experiences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Scalable Systems</h3>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Designing distributed systems that can handle growth, ensuring reliability and maintainability.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Modern DevOps</h3>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Streamlining deployment workflows with Docker, CI/CD, and cloud-native practices.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
