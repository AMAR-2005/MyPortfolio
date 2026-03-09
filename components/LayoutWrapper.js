import headerNavLinks from '@/data/headerNavLinks'
import { navigation } from '@/data/nav'
import siteMetadata from '@/data/siteMetadata'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Typewriter from 'typewriter-effect'
import CommandPalette from './CommandPalette'
import DropMenu from './DropMenu.js'
import Footer from './Footer'
import Link from './Link'
import SectionContainer from './SectionContainer'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  const router = useRouter()

  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -20 },
  }

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold">
                {`~${router.asPath}`}{' '}
                <Typewriter
                  options={{
                    strings: [],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="link-underline rounded py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <CommandPalette navigation={navigation} />
            <ThemeSwitch />
            <DropMenu />
          </div>
        </header>
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.main
            key={router.route}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear', duration: 0.4 }}
            className="mb-auto"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
