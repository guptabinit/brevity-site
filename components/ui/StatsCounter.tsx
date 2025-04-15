"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

interface StatsCounterProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
}

export default function StatsCounter({ value, suffix = "", prefix = "", label, duration = 2000 }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    let start = 0
    const end = value

    if (!inView) return

    // If the value is greater than 100, increment faster
    const incrementTime = duration / (end > 100 ? end / 50 : end)

    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= end) clearInterval(timer)
    }, incrementTime)

    return () => {
      clearInterval(timer)
    }
  }, [inView, value, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="stats-card"
    >
      <div className="stats-number">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="stats-label">{label}</div>
    </motion.div>
  )
}
