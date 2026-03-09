import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import projectsData from '@/data/projectsData'
import siteMetadata from '@/data/siteMetadata'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

export default function Projects() {
  const [searchValue, setSearchValue] = useState('')

  const filteredProjects = projectsData.filter((project) => {
    const searchContent =
      project.title +
      project.description +
      (project.tech1 || '') +
      (project.tech2 || '') +
      (project.tech3 || '')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <>
      <PageSEO
        title={`Projects - ${siteMetadata.author}`}
        description="A showcase of my technical journey and building solutions."
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="relative mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
              Projects <span className="bg-gradient-to-r from-primary-600 to-indigo-500 bg-clip-text text-transparent">&</span> Creations
            </h1>
            <div className="mt-4 h-1.5 w-24 rounded-full bg-primary-500" />
          </motion.div>

         

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mt-10 max-w-lg"
          >
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-focus-within:text-primary-500 transition-colors">
              <FiSearch size={20} />
            </div>
            <input
              aria-label="Search projects"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search by title or technology (e.g. React, Java)..."
              className="block w-full rounded-2xl border border-gray-100 bg-white/50 backdrop-blur-sm pl-12 pr-4 py-4 text-gray-900 shadow-sm transition-all focus:border-primary-500 focus:ring-1 focus:ring-primary-500 dark:border-gray-800 dark:bg-zinc-900/50 dark:text-gray-100"
            />
            <div className="absolute inset-0 rounded-2xl bg-primary-500 opacity-5 blur-xl -z-10" />
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="py-2">
          {!filteredProjects.length && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <div className="rounded-full bg-gray-50 p-6 dark:bg-zinc-900 mb-4">
                <FiSearch size={40} className="text-gray-300 dark:text-gray-700" />
              </div>
              <p className="text-xl font-medium text-gray-500 dark:text-gray-400">
                No projects found matching your search.
              </p>
            </motion.div>
          )}

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="-m-4 flex flex-wrap"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                  github={d.github}
                  tech1={d.tech1}
                  tech2={d.tech2}
                  tech3={d.tech3}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  )
}
