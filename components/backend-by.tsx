import Image from "next/image"

export default function BackendTag() {
  return (
    <div className="flex items-center justify-center md:justify-start flex-wrap gap-3 md:gap-6 rounded-xl md:rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-3 md:px-6 md:py-3 border border-gray-200/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 group max-w-full">
      <span className="text-sm md:text-base font-semibold text-primary dark:text-gray-100 px-2">Powered By</span>

      <div className="flex items-center justify-center flex-wrap gap-4 md:gap-8 px-2 md:px-4 py-1 md:py-0 md:border-l border-gray-300/50 dark:border-gray-700/50">
        <div className="relative h-12 md:h-10 w-7 md:w-10 transition-transform duration-300 group-hover:scale-110">
          <Image
            src="/images/microsoft-azure.png"
            alt="Microsoft Azure"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 28px, 40px"
          />
        </div>
        <div className="relative md:ml-4 h-12 md:h-10 w-24 md:w-40 transition-transform duration-300 group-hover:scale-110">
          <Image
            src="/images/startup-india.png"
            alt="Startup India"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 96px, 160px"
          />
        </div>
        <div className="relative h-12 md:h-10 w-20 md:w-20 transition-transform duration-300 group-hover:scale-110">
          <Image
            src="/images/aws-startups.png"
            alt="AWS Startups"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 56px, 80px"
          />
        </div>
      </div>
    </div>
  )
}
