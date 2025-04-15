export default function ProductsLoading() {
  return (
    <div className="min-h-screen pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="h-12 bg-gray-200 rounded-md animate-pulse mb-4 w-3/4 mx-auto"></div>
          <div className="h-6 bg-gray-200 rounded-md animate-pulse w-1/2 mx-auto"></div>
        </div>

        <div className="space-y-24">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-8 bg-gray-200 rounded-md animate-pulse mb-4 w-1/2"></div>
                <div className="h-6 bg-gray-200 rounded-md animate-pulse mb-6 w-full"></div>
                <div className="h-6 bg-gray-200 rounded-md animate-pulse mb-4 w-1/3"></div>
                <div className="space-y-2 mb-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-start">
                      <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse mr-2 mt-0.5"></div>
                      <div className="h-5 bg-gray-200 rounded animate-pulse w-full"></div>
                    </div>
                  ))}
                </div>
                <div className="h-6 bg-gray-200 rounded-md animate-pulse mb-4 w-1/3"></div>
                <div className="space-y-2 mb-8">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-start">
                      <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse mr-2 mt-0.5"></div>
                      <div className="h-5 bg-gray-200 rounded animate-pulse w-full"></div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="h-12 bg-gray-200 rounded-md animate-pulse w-32"></div>
                  <div className="h-12 bg-gray-200 rounded-md animate-pulse w-32"></div>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-[3/2] bg-gray-200 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
