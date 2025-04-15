export default function WorkLoading() {
  return (
    <div className="min-h-screen pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="h-12 bg-gray-200 rounded-md animate-pulse mb-4 w-3/4 mx-auto"></div>
          <div className="h-6 bg-gray-200 rounded-md animate-pulse w-1/2 mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="h-10 bg-gray-200 rounded-full animate-pulse w-24"></div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="h-64 bg-gray-200 animate-pulse"></div>
              <div className="p-6">
                <div className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-1/3"></div>
                <div className="h-6 bg-gray-200 rounded animate-pulse mb-3 w-full"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse mb-6 w-full"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
