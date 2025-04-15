export default function TechStackLoading() {
  return (
    <div className="min-h-screen pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="h-12 bg-gray-200 rounded-md animate-pulse mb-4 w-3/4 mx-auto"></div>
          <div className="h-6 bg-gray-200 rounded-md animate-pulse w-1/2 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="h-8 bg-gray-200 rounded-md animate-pulse mb-6 w-2/3"></div>
              <div className="space-y-3">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="h-10 bg-gray-200 rounded-md animate-pulse w-full"></div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="h-8 bg-gray-200 rounded-md animate-pulse mb-6 w-1/3"></div>
            <div className="h-6 bg-gray-200 rounded-md animate-pulse mb-8 w-2/3"></div>

            <div className="grid md:grid-cols-3 gap-6">
              {[...Array(9)].map((_, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="h-12 w-12 bg-gray-200 rounded-md animate-pulse mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-2 w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-full"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
