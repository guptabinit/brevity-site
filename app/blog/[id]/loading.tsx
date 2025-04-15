export default function BlogPostLoading() {
  return (
    <div className="min-h-screen pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto mb-8">
          <div className="h-8 bg-gray-200 rounded-md animate-pulse mb-4 w-1/4"></div>
          <div className="h-12 bg-gray-200 rounded-md animate-pulse mb-4 w-full"></div>
          <div className="h-12 bg-gray-200 rounded-md animate-pulse mb-6 w-3/4"></div>
          <div className="h-6 bg-gray-200 rounded-md animate-pulse w-1/3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="aspect-[16/9] bg-gray-200 rounded-xl animate-pulse mb-8"></div>
            <div className="space-y-4">
              <div className="h-6 bg-gray-200 rounded animate-pulse w-full"></div>
              <div className="h-6 bg-gray-200 rounded animate-pulse w-5/6"></div>
              <div className="h-6 bg-gray-200 rounded animate-pulse w-full"></div>
              <div className="h-6 bg-gray-200 rounded animate-pulse w-4/5"></div>
              <div className="h-6 bg-gray-200 rounded animate-pulse w-full"></div>
              <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
              <div className="flex items-center mb-4">
                <div className="h-16 w-16 rounded-full bg-gray-200 animate-pulse mr-4"></div>
                <div>
                  <div className="h-5 bg-gray-200 rounded animate-pulse mb-2 w-32"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                </div>
              </div>
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-full"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-full"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
