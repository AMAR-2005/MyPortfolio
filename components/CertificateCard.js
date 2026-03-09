import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiArrowRight, FiCalendar } from 'react-icons/fi'
import { HiBadgeCheck } from 'react-icons/hi'

const CertificateCard = ({
  title,
  issuer,
  date,
  description,
  imgSrc,
  href,
  featured = false,
}) => {
  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
    },
  }

  return (
    <motion.div
      variants={item}
      className="p-4 md:w-1/2 w-full"
    >
      <motion.div
        whileHover={{ y: -8 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-2xl dark:border-gray-800 dark:bg-zinc-900/50 backdrop-blur-xl"
      >
        {/* Certificate Image Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            alt={title}
            src={imgSrc || '/static/images/SVG-placeholder.png'}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {featured && (
            <div className="absolute top-4 left-4 z-10">
              <span className="flex items-center gap-1 rounded-full bg-amber-400/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black backdrop-blur-sm shadow-lg">
                <HiBadgeCheck className="text-sm" />
                Featured
              </span>
            </div>
          )}

          <div className="absolute top-4 right-4 z-10 transition-transform duration-500 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md border border-white/20">
              <FiCalendar />
              {date}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-grow flex-col p-7">
          <div className="flex items-center gap-2 mb-2 text-primary-600 dark:text-primary-400">
            <span className="text-xs font-bold uppercase tracking-[0.2em]">{issuer}</span>
            <HiBadgeCheck className="text-lg" />
          </div>

          <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
            {title}
          </h3>

          <p className="mb-6 line-clamp-3 flex-grow text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            {description}
          </p>

          <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 transition-colors group-hover:text-primary-500">
              <FiCalendar className="text-sm" />
              <span className="text-xs font-semibold uppercase tracking-wider">{date}</span>
            </div>

            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 transition-all hover:gap-3 dark:text-gray-100 dark:hover:text-primary-400"
              >
                Verify Certificate
                <FiArrowRight className="text-lg" />
              </a>
            )}
          </div>
        </div>

        {/* Top hover glow */}
        <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary-500 to-indigo-500 opacity-0 blur transition duration-500 group-hover:opacity-10 -z-10" />
      </motion.div>
    </motion.div>
  )
}

export default CertificateCard