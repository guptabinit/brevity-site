interface SectionHeadingProps {
  title: string
  subtitle?: string
  tag?: string
  centered?: boolean
  color?: string
}

export default function SectionHeading({ title, color , subtitle, tag, centered = false }: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} mb-8`}>
      {tag && (
        <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
          {tag}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
      {!color && subtitle && <p className={`text-lg text-gray-600 ${centered ? "max-w-3xl mx-auto" : ""}`}>{subtitle}</p>}
      {color && subtitle && <p className={`text-lg text-white ${centered ? "max-w-3xl mx-auto" : ""}`}>{subtitle}</p>}
    </div>
  )
}
