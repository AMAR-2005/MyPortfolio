import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const contacts = [
  {
    name: 'Email',
    value: 'amar.govindaraj@gmail.com',
    href: 'mailto:amar.govindaraj@gmail.com',
    icon: <FaEnvelope className="text-2xl" />,
    color: 'from-red-400 to-pink-500',
    description: 'Drop me a message anytime.',
  },
  {
    name: 'GitHub',
    value: 'AMAR-2005',
    href: 'https://github.com/AMAR-2005',
    icon: <FaGithub className="text-2xl" />,
    color: 'from-gray-600 to-gray-900',
    description: 'Check out my latest projects.',
  },
  {
    name: 'LinkedIn',
    value: 'amarnath2005',
    href: 'https://www.linkedin.com/in/amarnath2005/',
    icon: <FaLinkedin className="text-2xl" />,
    color: 'from-blue-500 to-indigo-600',
    description: 'Let\'s connect professionally.',
  },
  {
    name: 'LeetCode',
    value: 'AMARNATH_2005',
    href: 'https://leetcode.com/u/AMARNATH_2005/',
    icon: <SiLeetcode className="text-2xl" />,
    color: 'from-yellow-400 to-orange-500',
    description: 'View my coding achievements.',
  },
]

export default function Contact() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description="My contact details" />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Let&apos;s <span className="text-primary-500">Connect</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
            I&apos;m always open to new opportunities, collaborations, and conversations.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8"
        >
          {contacts.map((contact) => (
            <motion.a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 text-center transition-all hover:border-primary-400 dark:border-gray-800 dark:bg-zinc-900 shadow-sm hover:shadow-xl dark:hover:border-primary-600"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${contact.color} text-white shadow-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 mb-4`}
              >
                {contact.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {contact.name}
              </h3>
              <p className="mt-1 font-medium text-primary-500">{contact.value}</p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {contact.description}
              </p>
            </motion.a>
          ))}
        </motion.div>

        
      </div>
    </>
  )
}