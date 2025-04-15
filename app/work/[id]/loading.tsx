export default function CaseStudyLoading() {
  return (
    <div className="min-h-screen pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <div className="h-8 bg-gray-200 rounded-md animate-pulse mb-8 w-1/6"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="h-6 bg-gray-200 rounded-md animate-pulse mb-4 w-1/4"></div>
            <div className="h-12 bg-gray-200 rounded-md animate-pulse mb-4 w-full"></div>
            <div className="h-12 bg-gray-200 rounded-md animate-pulse mb-6 w-3/4"></div>
            <div className="flex flex-wrap gap-2 mb-6">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="h-8 bg-gray-200 rounded-full animate-pulse w-20"></div>
              ))}
            </div>
            <div className="h-6 bg-gray-200 rounded-md animate-pulse w-1/2"></div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-[16/9] bg-gray-200 animate-pulse"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <div className="h-8 bg-gray-200 rounded-md animate-pulse mb-4 w-1/3"></div>
            <div className="h-6 bg-gray-200 rounded-md animate-pulse mb-2 w-full"></div>
            <div className="h-6 bg-gray-200 rounded-md animate-pulse mb-2 w-5/6"></div>
            <div className="h-6 bg-gray-200 rounded-md animate-pulse w-4/5"></div>
          </div>
          <div>
            <div className="h-8 bg-gray-200 rounded-md animate-pulse mb-4 w-1/3"></div>
            <div className="h-6 bg-gray-200 rounded-md animate-pulse mb-2 w-full"></div>
            <div className="h-6 bg-gray-200 rounded-md animate-pulse mb-2 w-5/6"></div>
            <div className="h-6 bg-gray-200 rounded-md animate-pulse w-4/5"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
