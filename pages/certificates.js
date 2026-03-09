import CertificateCard from '@/components/CertificateCard'
import { PageSEO } from '@/components/SEO'
import certificatesData from '@/data/certificatesData'
import siteMetadata from '@/data/siteMetadata'
import { motion } from 'framer-motion'

export default function Certificates() {
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
                title={`Certificates - ${siteMetadata.author}`}
                description="A list of my professional certifications and notable achievements."
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
                            Certifications <span className="bg-gradient-to-r from-primary-600 to-indigo-500 bg-clip-text text-transparent">&</span> Achievements
                        </h1>
                        <div className="mt-4 h-1.5 w-24 rounded-full bg-primary-500" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl max-w-2xl text-gray-600 dark:text-gray-400 leading-relaxed"
                    >
                        A curated showcase of my professional growth, technical expertise, and verified
                        achievements from leading industry platforms.
                    </motion.p>
                </div>

                {/* Certificates Grid */}
                <div className="py-2">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="-m-4 flex flex-wrap"
                    >
                        {certificatesData.map((d) => (
                            <CertificateCard
                                key={d.title}
                                title={d.title}
                                issuer={d.issuer}
                                date={d.date}
                                description={d.description}
                                imgSrc={d.imgSrc}
                                href={d.href}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    )
}
