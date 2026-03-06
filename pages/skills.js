import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaLinux,
} from 'react-icons/fa'

import {
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMaterialui,
  SiSpringboot,
  SiMysql,
  SiGooglecloud,
  SiTerraform,
  SiPostman,
  SiSelenium,
} from 'react-icons/si'
export default function Skills() {
  const expertise = [
    {
      title: 'Full-Stack Mastery',
      desc: 'Proficient in React.js, Next.js, Node.js, Spring Boot, and SQL/NoSQL databases to build complete scalable systems.',
    },
    {
      title: 'Real-Time Systems',
      desc: 'Experience building RESTful APIs and scalable backend services for modern applications.',
    },
    {
      title: 'Database & DevOps Mastery',
      desc: 'Working with MySQL, MongoDB, AWS, Docker, and CI/CD pipelines for reliable deployments.',
    },
    {
      title: 'Secure & Scalable Architecture',
      desc: 'Designing JWT-based authentication and role-based access control for secure applications.',
    },
    {
      title: 'Modern UI Development',
      desc: 'Building responsive interfaces using React, Tailwind CSS, and modern UI design practices.',
    },
  ]

  const innerSkills = [
    { name: 'React', icon: <FaReact className="text-sky-500 text-4xl" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500 text-4xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-green-600 text-4xl" /> },
    { name: 'HTML5', icon: <SiHtml5 className="text-orange-500 text-4xl" /> },
    { name: 'CSS3', icon: <SiCss3 className="text-blue-500 text-4xl" /> },
    { name: 'Material UI', icon: <SiMaterialui className="text-blue-400 text-4xl" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600 text-4xl" /> },
    { name: 'Java', icon: <FaJava className="text-red-500 text-4xl" /> },
    { name: 'Python', icon: <FaPython className="text-yellow-400 text-4xl" /> },
  ]
  
  const outerSkills = [
    { name: 'C++', icon: <SiCplusplus className="text-blue-600 text-4xl" /> },
    { name: 'SQL', icon: <SiMysql className="text-blue-500 text-4xl" /> },
    { name: 'AWS', icon: <FaAws className="text-orange-400 text-4xl" /> },
    { name: 'GCP', icon: <SiGooglecloud className="text-blue-500 text-4xl" /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-500 text-4xl" /> },
    { name: 'Terraform', icon: <SiTerraform className="text-purple-500 text-4xl" /> },
    { name: 'Linux', icon: <FaLinux className="text-yellow-500 text-4xl" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-500 text-4xl" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-white text-4xl" /> },
    { name: 'CI/CD', icon: <FaGitAlt className="text-orange-400 text-4xl" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-500 text-4xl" /> },
    { name: 'Selenium', icon: <SiSelenium className="text-green-500 text-4xl" /> },
  ]
  const radius = 220;
  return (
    <>
      <PageSEO title={`Skills - ${siteMetadata.author}`} description="Technical skills" />

      <div className="min-h-screen text-gray-900 dark:text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div>
              <h1 className="mt-10 text-4xl font-bold leading-tight md:text-5xl">
                Technical Expertise
              </h1>

              <ul className="mt-10 space-y-6">
                {expertise.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <CheckCircleIcon className="h-6 w-6 text-purple-500" />

                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT SIDE */}
          <div className="flex items-center justify-center mt">

<div className="relative h-[600px] w-[600px]">

  {/* CENTER */}
 

  {/* INNER CIRCLE */}
  {innerSkills.map((skill, i) => {
    const radius = 140
    const angle = (i / innerSkills.length) * 2 * Math.PI
    const x = radius * Math.cos(angle)
    const y = radius * Math.sin(angle)

    return (
      <div
  key={skill.name}
  style={{
    left: `calc(50% + ${x}px)`,
    top: `calc(50% + ${y}px)`,
  }}
  className="group absolute flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-[#0f1128] shadow-lg transition hover:scale-110 hover:border-purple-500"
>
  {skill.icon}

  {/* Hover Skill Name */}
  <span className="absolute -bottom-7 hidden whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white group-hover:block dark:bg-white dark:text-black">
    {skill.name}
  </span>
</div>
    )
  })}

  {/* OUTER CIRCLE */}
  {outerSkills.map((skill, i) => {
    const radius = 230
    const angle = (i / outerSkills.length) * 2 * Math.PI
    const x = radius * Math.cos(angle)
    const y = radius * Math.sin(angle)

    return (
      <div
  key={skill.name}
  style={{
    left: `calc(50% + ${x}px)`,
    top: `calc(50% + ${y}px)`,
  }}
  className="group absolute flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-[#0f1128] shadow-lg transition hover:scale-110 hover:border-purple-500"
>
  {skill.icon}

  {/* Hover Skill Name */}
  <span className="absolute -bottom-7 hidden whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white group-hover:block dark:bg-white dark:text-black">
    {skill.name}
  </span>
</div>
    )
  })}

</div>

</div>
          </div>
        </div>
      </div>
    </>
  )
}
