import type React from "react"
import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-sm hover:shadow-md active:bg-primary-800",
        secondary:
          "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 shadow-sm hover:shadow-md active:bg-gray-100",
        outline: "bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-700 hover:text-gray-900",
        link: "bg-transparent underline-offset-4 hover:underline text-primary-600 hover:text-primary-700 p-0 h-auto",
        accent: "bg-accent-600 text-white hover:bg-accent-700 shadow-sm hover:shadow-md active:bg-accent-800",
      },
      size: {
        sm: "h-9 px-3 rounded-md text-xs",
        md: "h-10 py-2 px-4",
        lg: "h-12 px-6 rounded-md text-base",
        xl: "h-14 px-8 rounded-md text-lg",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string
  external?: boolean
}

const Button = ({ className, variant, size, fullWidth, href, external = false, ...props }: ButtonProps) => {
  if (href) {
    return external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
      >
        {props.children}
      </a>
    ) : (
      <Link href={href} className={cn(buttonVariants({ variant, size, fullWidth, className }))}>
        {props.children}
      </Link>
    )
  }

  return <button className={cn(buttonVariants({ variant, size, fullWidth, className }))} {...props} />
}

export default Button
