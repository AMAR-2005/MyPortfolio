import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
const contacts = [
  {
    name: 'Email',
    value: 'amar.govindaraj@gmail.com',
    href: 'mailto:amar.govindaraj@gmail.com',
    icon: <FaEnvelope className="text-2xl" />,
    color: 'from-red-500 to-pink-500',
  },
  {
    name: 'GitHub',
    value: 'AMAR-2005',
    href: 'https://github.com/AMAR-2005',
    icon: <FaGithub className="text-2xl" />,
    color: 'from-gray-700 to-black',
  },
  {
    name: 'LinkedIn',
    value: 'amarnath2005',
    href: 'https://www.linkedin.com/in/amarnath2005/',
    icon: <FaLinkedin className="text-2xl" />,
    color: 'from-blue-600 to-indigo-600',
  },
  {
    name: 'LeetCode',
    value: 'AMARNATH_2005',
    href: 'https://leetcode.com/u/AMARNATH_2005/',
    icon: <SiLeetcode className="text-2xl" />,
    color: 'from-yellow-500 to-orange-500',
  }
]

export default function Contact() {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description="All my contacts" />

      <div className="mx-auto max-w-4xl px-4 py-10">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Get in Touch
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Feel free to reach out for collaborations, opportunities or just to say hi.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 sm:grid-cols-2">

          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
            className="group relative flex items-center gap-4 rounded-xl border border-gray-400 bg-gradient-to-r from-white via-white to-indigo-100 bg-[length:200%_100%] bg-left p-6 shadow-sm transition-all duration-500 hover:bg-right hover:scale-[1.03] hover:shadow-xl dark:border-gray-700 dark:from-zinc-800 dark:via-zinc-800 dark:to-slate-900"
            >

              {/* Icon */}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${contact.color} text-white transition-transform duration-300 group-hover:scale-150`}
              >
                {contact.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {contact.name}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 ">
                  {contact.value}
                </p>
              </div>

            </a>
          ))}

        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center text-gray-600 dark:text-gray-400">
          Always open to discussing new{' '}
          <span className="font-semibold text-indigo-500">projects</span>,{' '}
          <span className="font-semibold text-indigo-500">creative ideas</span>, or
          opportunities to be part of your vision.
        </div>

      </div>
    </>
  )
}