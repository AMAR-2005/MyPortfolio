import CertificateCard from '@/components/CertificateCard'
import { PageSEO } from '@/components/SEO'
import certificatesData from '@/data/certificatesData'
import siteMetadata from '@/data/siteMetadata'

export default function Certificates() {
    return (
        <>
            <PageSEO
                title={`Certificates - ${siteMetadata.author}`}
                description="My professional certifications and achievements"
            />
            <div className="mx-auto max-w-6xl divide-y divide-gray-400">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Certificates
                    </h1>
                    <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                        A showcase of my professional growth, technical certifications, and notable achievements.
                    </p>
                </div>
                <div className="container py-12">
                    <div className="-m-4 flex flex-wrap">
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
                    </div>
                </div>
            </div>
        </>
    )
}
