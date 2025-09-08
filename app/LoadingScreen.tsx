'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onLoadingComplete, 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    return () => clearInterval(timer)
  }, [onLoadingComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900"
    >
      {/* Background Hearts */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300 text-2xl"
            initial={{ 
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 800,
              y: typeof window !== 'undefined' ? window.innerHeight + 50 : 600,
              opacity: 0.7
            }}
            animate={{
              y: -50,
              rotate: 360,
              opacity: [0.7, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Loading Image - Replace with your image */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 2, repeat: Infinity, ease: "linear" },
          scale: { duration: 1, repeat: Infinity }
        }}
        className="mb-8"
      >
        <div className="w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-4xl shadow-2xl">
          😎
        </div>
      </motion.div>

      {/* Loading Text */}
      <motion.h1
        animate={{
          scale: [1, 1.05, 1],
          textShadow: [
            "0 0 10px rgb(255,0,128)",
            "0 0 20px rgb(255,0,128)",
            "0 0 10px rgb(255,0,128)"
          ]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-4xl md:text-6xl font-black text-center mb-8 rainbow-text"
        style={{ fontFamily: 'Fredoka One, cursive' }}
      >
        Loading ORANG GANtenggg 🥳🥳🥳😍😍🥰🥰
      </motion.h1>

      {/* Progress Bar */}
      <div className="w-80 h-4 bg-gray-800 rounded-full overflow-hidden mb-4 shadow-lg">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Progress Text */}
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="text-white text-xl font-bold"
      >
        {Math.round(progress)}% Ganteng Loaded...
      </motion.p>

      {/* Loading Spinner */}
      <div className="loading-spinner mt-4"></div>
    </motion.div>
  )
}
