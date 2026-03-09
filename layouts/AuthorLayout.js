import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import { RoughNotation } from 'react-rough-notation'
import { AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
    text1,
    text2,
    text3,
  } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`A little trivia me`} />
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 md:pl-16">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 xl:sticky xl:top-0">
            <Image
              src={avatar}
              alt="avatar"
              width="210px"
              height="220px"
              className="h-48 w-48 rounded-full xl:rounded-full"
              placeholder="blur"
              blurDataURL="/static/images/SVG-placeholder.png"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex flex-col pt-3">
              <a
                className="rounded-full border px-8 py-2 text-center text-sm font-light text-gray-700 transition-colors hover:border-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white hover:shadow dark:text-white"
                href="https://www.linkedin.com/in/amarnath2005/"
                data-screen-name="@_ParthDesai_"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiOutlineLinkedin className="mr-2 mb-0.5 inline h-5 w-5" />
                Say Hi!
              </a>
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <p>
              A passionate Full-Stack Developer dedicated to building modern, scalable web
              applications that merge technical precision with intuitive design. I thrive on solving
              complex challenges through clean code and innovative architecture, ensuring seamless
              user experiences from concept to deployment.
            </p>
            <p>
              I am a strong advocate for open source and I am always interested in working on new
              projects with new people. Feel free to reach out if you have anything to talk about,
              you can reach me through{' '}
              <Link
                href={'mailto:amar.govindaraj@gmail.com'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                Mail
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="ml-0.5 inline-block h-4 w-4 fill-current"
                >
                  <g data-name="Layer 2">
                    <g data-name="external-link">
                      <rect width="24" height="24" opacity="0" />
                      <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                      <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                    </g>
                  </g>
                </svg>
              </Link>{' '}
              or{' '}
              <Link
                href={'https://api.whatsapp.com/send?phone=6382803329&text=hi'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                Whatsapp
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="ml-0.5 inline-block h-4 w-4 fill-current"
                >
                  <g data-name="Layer 2">
                    <g data-name="external-link">
                      <rect width="24" height="24" opacity="0" />
                      <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                      <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                    </g>
                  </g>
                </svg>
              </Link>
            </p>
            <div className="mt-16 max-w-4xl">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">
                What I Bring to the Table
              </h2>

              <ul className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                <li>
                  <strong>Full-Stack Development Expertise:</strong> Building scalable applications
                  using React.js, Node.js, Spring Boot, and MySQL while designing responsive UIs and
                  reliable backend systems.
                </li>

                <li>
                  <strong>Secure & Scalable Backend Systems:</strong> Developing REST APIs,
                  implementing JWT authentication, and designing role-based access control with
                  optimized database architecture.
                </li>

                <li>
                  <strong>Cloud & DevOps Integration:</strong> Deploying applications with AWS,
                  Docker, and CI/CD pipelines to ensure scalability and reliability.
                </li>

                <li>
                  <strong>Problem Solving & Algorithms:</strong> Solved 450+ problems on LeetCode,
                  strengthening expertise in Data Structures and Algorithms.
                </li>

                <li>
                  <strong>Continuous Learning:</strong> Exploring modern technologies, system design
                  concepts, and building real-world projects to improve software engineering skills.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
