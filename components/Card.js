import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { HiOutlineExternalLink } from 'react-icons/hi'
import FolderIcon from './icon'

const Card = ({ title, description, imgSrc, href, github, tech1, tech2, tech3 }) => {
  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  }

  return (
    <motion.div
      layout
      variants={item}
      initial="hidden"
      animate="show"
      exit="exit"
      className="p-4 md:w-1/2 w-full"
    >
      <motion.div
        whileHover={{
          y: -10,
          boxShadow: "0 20px 40px -20px rgba(0, 0, 0, 0.2)"
        }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white/50 p-7 transition-all dark:border-gray-800 dark:bg-zinc-900/50 backdrop-blur-xl"
      >
        {/* Glow effect on hover */}
        <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary-500 to-indigo-500 opacity-0 blur transition duration-500 group-hover:opacity-10" />

        <div className="relative flex-grow">
          {/* Card Header */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-colors  dark:text-primary-400">
              <FolderIcon />
            </div>
            <div className="flex space-x-3">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                  aria-label="GitHub Repository"
                >
                  <FiGithub size={22} />
                </a>
              )}
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                  aria-label="Live Demo"
                >
                  <HiOutlineExternalLink size={24} />
                </a>
              )}
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h3 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 transition-colors dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
              {title}
            </h3>
            <p className="mb-6 line-clamp-4 text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              {description}
            </p>
          </div>
        </div>

        {/* Card Footer: Tech Tags */}
        <div className="relative mt-auto flex flex-wrap gap-2 pt-4">
          {[tech1, tech2, tech3].filter(Boolean).map((tech, i) => (
            <span
              key={i}
              className="rounded-xl border border-gray-100 bg-gray-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-600 dark:border-gray-800 dark:bg-zinc-800/50 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Card
