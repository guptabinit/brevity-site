"use client"

import { motion } from "framer-motion"

interface BackgroundElementsProps {
  variant?: "light" | "dark" | "primary"
  density?: "low" | "medium" | "high"
  animate?: boolean
}

export default function BackgroundElements({
  variant = "light",
  density = "medium",
  animate = true,
}: BackgroundElementsProps) {
  // Define colors based on variant
  const colors = {
    light: {
      circle: "bg-gray-200/40",
      square: "bg-gray-100/30",
      dot: "bg-gray-300/50",
    },
    dark: {
      circle: "bg-gray-700/20",
      square: "bg-gray-800/10",
      dot: "bg-gray-600/30",
    },
    primary: {
      circle: "bg-primary-100/30",
      square: "bg-primary-50/20",
      dot: "bg-primary-200/40",
    },
  }

  // Define number of elements based on density
  const counts = {
    low: 5,
    medium: 10,
    high: 15,
  }

  // Generate random positions
  const generateElements = (count: number) => {
    const elements = []
    for (let i = 0; i < count; i++) {
      const type = Math.random() > 0.6 ? "circle" : Math.random() > 0.3 ? "square" : "dot"
      const size = type === "dot" ? 4 + Math.random() * 4 : 20 + Math.random() * 60
      const top = Math.random() * 100
      const left = Math.random() * 100
      const delay = Math.random() * 5

      elements.push({ type, size, top, left, delay })
    }
    return elements
  }

  const elements = generateElements(counts[density])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {elements.map((element, index) => {
        const shapeClass =
          element.type === "circle"
            ? `${colors[variant].circle} rounded-full`
            : element.type === "square"
              ? `${colors[variant].square} rounded-md rotate-45`
              : `${colors[variant].dot} rounded-full`

        return animate ? (
          <motion.div
          suppressHydrationWarning
            key={index}
            className={`absolute ${shapeClass}`}
            style={{
              width: element.size,
              height: element.size,
              top: `${element.top}%`,
              left: `${element.left}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: element.delay,
              ease: "easeInOut",
            }}
          />
        ) : (
          <div
            key={index}
            className={`absolute ${shapeClass}`}
            style={{
              width: element.size,
              height: element.size,
              top: `${element.top}%`,
              left: `${element.left}%`,
              opacity: 0.3 + Math.random() * 0.5,
            }}
          />
        )
      })}
    </div>
  )
}
