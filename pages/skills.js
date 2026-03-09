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
  SiNextdotjs, SiTailwindcss,
} from 'react-icons/si'
export default function Skills() {
  const expertise = [

    {
      title: 'Real-Time Systems',
      desc: 'Experience building RESTful APIs and scalable backend services for modern applications.',
    },
    {
      title: 'Full-Stack Mastery',
      desc: 'Proficient in React.js, Node.js, Java, Spring Boot, Javascript, HTML/CSS and MySQL databases.',
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
  const skillTree = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-sky-500 text-4xl" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-4xl" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500 text-4xl" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-500 text-4xl" /> },
        { name: "Material UI", icon: <SiMaterialui className="text-blue-400 text-4xl" /> },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-600 text-4xl" /> },
        { name: "Java", icon: <FaJava className="text-red-500 text-4xl" /> },
        { name: "Python", icon: <FaPython className="text-yellow-400 text-4xl" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-600 text-4xl" /> },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-600 text-4xl" /> },
      ],
    },
    {
      category: "Tools / Testing",
      skills: [
        { name: "Postman", icon: <SiPostman className="text-orange-500 text-4xl" /> },
        { name: "Selenium", icon: <SiSelenium className="text-green-500 text-4xl" /> },
      ],
    },
    {
      category: "Cloud / DevOps",
      skills: [
        { name: "AWS", icon: <FaAws className="text-orange-400 text-4xl" /> },
        { name: "GCP", icon: <SiGooglecloud className="text-blue-500 text-4xl" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500 text-4xl" /> },
        { name: "Terraform", icon: <SiTerraform className="text-purple-500 text-4xl" /> },
        { name: "Linux", icon: <FaLinux className="text-yellow-500 text-4xl" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-500 text-4xl" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white text-4xl" /> },
        { name: "CI/CD", icon: <FaGitAlt className="text-orange-400 text-4xl" /> },
      ],
    }
  ];

  const buildColumns = (groups, numCols) => {
    const cols = Array.from({ length: numCols }, () => [])
    const colCounts = Array(numCols).fill(0)

    for (const group of groups) {
      // Weight = skills + 1 for the category header
      const weight = group.skills.length + 1
      const shortestCol = colCounts.indexOf(Math.min(...colCounts))
      cols[shortestCol].push(group)
      colCounts[shortestCol] += weight
    }

    return cols
  }

  const cols3 = [
    skillTree.filter((g) => ['Frontend', 'Backend'].includes(g.category)),
    skillTree.filter((g) => ['Database', 'Tools / Testing'].includes(g.category)),
    skillTree.filter((g) => ['Cloud / DevOps'].includes(g.category)),
  ]

  const cols2 = [
    skillTree.filter((g) => ['Frontend', 'Backend'].includes(g.category)),
    skillTree.filter((g) => ['Database', 'Tools / Testing', 'Cloud / DevOps'].includes(g.category)),
  ]
  const SkillGroup = ({ group }) => (
    <div className="mb-6">
      <div className="font-semibold text-base mb-2 text-gray-800 dark:text-gray-100">
        {group.category}
      </div>
      <ul className="ml-3 border-l-2 border-purple-400/40 pl-4 space-y-2">
        {group.skills.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center gap-3 group hover:translate-x-0.5 transition-transform"
          >
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full -ml-[1.35rem] shrink-0" />
            <span className="shrink-0">{skill.icon}</span>
            <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
  

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
                    <CheckCircleIcon className="h-7 w-7 text-purple-500" />

                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT SIDE */}
            <div className="mt-10">
              {/* 3-column layout (lg+) */}
              <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-6">
                {cols3.map((col, i) => (
                  <div key={i}>
                    {col.map((group) => (
                      <SkillGroup key={group.category} group={group} />
                    ))}
                  </div>
                ))}
              </div>

              {/* 2-column layout (md) */}
              <div className="hidden md:grid md:grid-cols-2 md:gap-x-6 lg:hidden">
                {cols2.map((col, i) => (
                  <div key={i}>
                    {col.map((group) => (
                      <SkillGroup key={group.category} group={group} />
                    ))}
                  </div>
                ))}
              </div>

              {/* 1-column layout (sm) */}
              <div className="md:hidden">
                {skillTree.map((group) => (
                  <SkillGroup key={group.category} group={group} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
