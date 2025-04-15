export default function ProductDetailLoading() {
  return (
    <div className="min-h-screen pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <div className="h-8 bg-gray-200 rounded-md animate-pulse mb-8 w-1/6"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="h-6 bg-gray-200 rounded-md animate-pulse mb-4 w-1/4"></div>
            <div className="h-12 bg-gray-200 rounded-md animate-pulse mb-4 w-full"></div>
            <div className="h-6 bg-gray-200 rounded-md animate-pulse mb-2 w-full"></div>
            <div className="h-6 bg-gray-200 rounded-md animate-pulse mb-2 w-5/6"></div>
            <div className="h-6 bg-gray-200 rounded-md animate-pulse mb-8 w-4/5"></div>
            <div className="flex flex-wrap gap-4">
              <div className="h-12 bg-gray-200 rounded-md animate-pulse w-32"></div>
              <div className="h-12 bg-gray-200 rounded-md animate-pulse w-32"></div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-[16/9] bg-gray-200 animate-pulse"></div>
          </div>
        </div>

        <div className="mb-16">
          <div className="h-8 bg-gray-200 rounded-md animate-pulse mb-4 w-1/4 mx-auto"></div>
          <div className="h-6 bg-gray-200 rounded-md animate-pulse mb-12 w-1/2 mx-auto"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse mb-4"></div>
                <div className="h-6 bg-gray-200 rounded animate-pulse mb-2 w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-full"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-full"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
