import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row">
          <div className="max-w-3xl pt-6">
            {/* Heading */}
            <h1 className="pb-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Amarnath
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
              Full Stack Developer • Cloud Enthusiast • Problem Solver
            </p>

            {/* Description */}
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              I'm a Computer Science Engineering student passionate about building scalable and
              efficient web applications. I specialize in
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {' '}
                React.js, Node.js, Spring Boot, and MySQL
              </span>
              , and enjoy designing complete systems — from intuitive frontend interfaces to robust
              backend APIs and optimized database architectures.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              I've built several real-world projects including inventory systems, car rental
              platforms, and customer support applications with
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {' '}
                JWT authentication and role-based access control
              </span>
              . I also work with
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {' '}
                AWS, Docker, REST APIs, and modern DevOps workflows.
              </span>
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              I love solving complex problems and have solved
              <span className="font-semibold text-indigo-500">
                {' '}
                450+ algorithm problems on LeetCode
              </span>
              , strengthening my data structures and system design skills.
            </p>
          </div>
          <div className="h-content sm:h-content-sm flex flex-col justify-around">
            <h1 className="sm:text-8.5xl tracking-tightest my-28 select-none text-center text-6xl font-extrabold leading-none sm:my-10">
              <span
                data-content="Welcome"
                className="relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-1 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
              >
                <span className="animate-gradient-foreground-1 bg-gradient-to-br from-gradient-1-start to-gradient-1-end bg-clip-text px-2 text-transparent">
                  Welcome
                </span>
              </span>
              <span
                data-content="To My"
                className="relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-2 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
              >
                <span className="animate-gradient-foreground-2 bg-gradient-to-br from-gradient-2-start to-gradient-2-end bg-clip-text px-2 text-transparent">
                  To My
                </span>
              </span>
              <span
                data-content="Portfolio."
                className="relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-3 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
              >
                <span className="animate-gradient-foreground-3 bg-gradient-to-br from-gradient-3-start to-gradient-3-end bg-clip-text px-2 text-transparent">
                  Portfolio.
                </span>
              </span>
            </h1>
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-700" />
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 grid-cols-3 gap-8 py-12">
            <div className="my-2 grid items-start gap-8">
              <div className="group relative">
                <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <Link href="/projects">
                  <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                    <span className="flex items-center space-x-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 -rotate-6 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                      <span className="pr-6 text-gray-900 dark:text-gray-100">What I built</span>
                    </span>
                    <span className="pl-6 text-amber-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                      Projects&nbsp;&rarr;
                    </span>
                  </span>
                </Link>
              </div>
            </div>

            <div className="my-2 grid items-start gap-8">
              <div className="group relative">
                <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r  from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <Link href="/resume.pdf">
                  <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                    <span className="flex items-center space-x-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 -rotate-6 text-fuchsia-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                      <span className="pr-6 text-gray-900 dark:text-gray-100">
                        Hire me!&nbsp;&nbsp;&nbsp;
                      </span>
                    </span>
                    <span className="pl-6 text-primary-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                      Resume&nbsp;&rarr;
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end pt-5 text-lg font-normal leading-6">
          <Link
            href="/about"
            className=" special-underline-new text-primary-500 hover:text-gray-100 hover:no-underline dark:text-primary-500 hover:dark:text-gray-100"
            aria-label="all posts"
          >
            About me &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">{/* <NewsletterForm /> */}</div>
      )}
    </>
  )
}
