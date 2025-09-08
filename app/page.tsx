'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingScreen from './LoadingScreen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  // Floating hearts animation
  const FloatingHeart = ({ delay }: { delay: number }) => (
    <motion.div
      className="absolute text-red-500 text-2xl pointer-events-none"
      initial={{ 
        x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 500,
        y: typeof window !== 'undefined' ? window.innerHeight + 50 : 600,
        opacity: 0
      }}
      animate={{
        y: -50,
        opacity: [0, 1, 0],
        rotate: 360,
        scale: [1, 1.5, 1]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        delay: delay,
        ease: "linear"
      }}
    >
      💖
    </motion.div>
  )

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 via-red-900 to-orange-900"
        >
          {/* Floating Hearts Background */}
          {[...Array(15)].map((_, i) => (
            <FloatingHeart key={i} delay={i * 0.5} />
          ))}

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20"
                style={{
                  width: Math.random() * 300 + 50,
                  height: Math.random() * 300 + 50,
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%'
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: Math.random() * 10 + 5,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
              />
            ))}
          </div>

          <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
            
            {/* Main Title */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-center mb-8"
            >
              <motion.h1
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [-1, 1, -1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl md:text-8xl font-black mb-4 rainbow-text text-glow"
                style={{ fontFamily: 'Fredoka One, cursive' }}
              >
                BTW AKU GANTENG GAK????
              </motion.h1>
              
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-6xl mb-4"
              >
                🥰🥰🥰🥰🥳🥳🥳🥳😍😍😍😍😍🤭🤭🤭🤭
              </motion.div>
            </motion.div>

            {/* Video Section */}
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative mb-8"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-400 bg-gradient-to-r from-pink-500 to-purple-500 p-2">
                <video
                  ref={videoRef}
                  className="w-full max-w-md h-auto rounded-2xl"
                  loop
                  muted
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src="/your-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Play/Pause Overlay */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePlayVideo}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-all duration-300"
                >
                  <div className="text-6xl text-white drop-shadow-lg">
                    {isPlaying ? '⏸️' : '▶️'}
                  </div>
                </motion.button>
              </div>

              {/* Floating emojis around video */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 text-4xl"
              >
                🔥
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 text-4xl"
              >
                ✨
              </motion.div>
            </motion.div>

            {/* Interactive Buttons */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-wrap gap-4 justify-center mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert("YESS! SUPER GANTENG! 😍✨")}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-xl rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white"
              >
                GANTENG BGT NJIR! 😍
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert("Bohong! Pasti ganteng kok! 🥰💖")}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-xl rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white"
              >
                ENGGAK 🥵🤭
              </motion.button>
            </motion.div>

            {/* Love Counter */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-xl"
            >
              <motion.h3
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-2xl font-bold text-white mb-2"
              >
                Level Ganteng 😋🤭
              </motion.h3>
              <motion.div
                animate={{ 
                  width: ["0%", "100%"],
                  backgroundColor: ["rgb(239, 68, 68)", "rgb(34, 197, 94)"]
                }}
                transition={{ duration: 3, delay: 1.5 }}
                className="h-6 bg-green-500 rounded-full mb-2 shadow-inner"
              />
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-xl text-white font-bold"
              >
                🔥 NJIR GANTENG BGT COK 🥰🤭😋! 🔥
              </motion.p>
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-8 text-center"
            >
              <motion.p
                animate={{ 
                  textShadow: [
                    "0 0 10px rgb(255,255,255)",
                    "0 0 20px rgb(255,0,128)",
                    "0 0 10px rgb(255,255,255)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-white text-lg font-bold"
              >
                Made with 💖 by the most GANTENG person ever! 😎✨
              </motion.p>
            </motion.div>
          </div>
        </motion.main>
      )}
    </>
  )
}
