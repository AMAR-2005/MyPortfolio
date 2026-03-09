import Image from 'next/image'

const CertificateCard = ({
  title,
  issuer,
  date,
  description,
  imgSrc,
  href,
  skills = [],
  credentialId,
  featured = false,
}) => (
  <div className="group relative p-4 md:w-1/2 lg:w-1/2" style={{ maxWidth: '544px' }}>
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">

      {/* Full-card certificate image — fades on hover for text contrast */}
      <Image
        alt={title}
        src={imgSrc}
        className="object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-30"
        layout="fill"
      />

      {/* Featured ribbon */}
      {featured && (
        <div className="absolute top-3 left-3 z-20">
          <span className="block rounded-full bg-gradient-to-r from-amber-400 to-orange-400 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-white shadow-md">
            Featured
          </span>
        </div>
      )}

      {/* Date pill — visible by default, fades on hover */}
      <div className="absolute top-3 right-3 z-20 transition-opacity duration-300 group-hover:opacity-0">
        <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
          {date}
        </span>
      </div>

      {/* ── Hover overlay: slides up from bottom ── */}
      <div
        className="absolute inset-0 z-10 flex flex-col justify-end
                   translate-y-full transition-transform duration-500 ease-in-out
                   group-hover:translate-y-0"
      >
        <div className="h-full w-full bg-black/60 px-6 pt-10 pb-6 flex flex-col justify-end gap-3">

          {/* Issuer + verified badge */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold uppercase tracking-widest text-white">
              {issuer}
            </span>
            <svg className="h-3.5 w-3.5 text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-label="Verified">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Title + external link */}
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-xl font-extrabold leading-tight tracking-tight text-white">
              {title}
            </h2>
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 shrink-0 rounded-full bg-emerald-700 p-3 transition-colors hover:bg-white/25"
                aria-label="View certificate"
              >
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-gray-300 line-clamp-3">
            {description}
          </p>

          {/* Skill tags */}
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {/* Footer: date + credential ID */}
          <div className="flex items-center justify-between border-t border-white/10 pt-3">
            <div className="flex items-center gap-1.5 text-gray-400">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs">{date}</span>
            </div>
            {credentialId && (
              <span className="font-mono text-[10px] text-gray-500 tracking-tight">
                ID: {credentialId}
              </span>
            )}
          </div>

        </div>
      </div>

    </div>
  </div>
)

export default CertificateCard