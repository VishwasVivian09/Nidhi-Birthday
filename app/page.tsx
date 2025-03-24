"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Gift, Cake, Heart, PartyPopper, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function BirthdayPage() {
  const [isCardOpen, setIsCardOpen] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)

  // Replace these with actual photos of your friend
  const photos = [
    "/5.jpg?height=800&width=600",
    "/6.jpg?height=800&width=600",
    "/3.jpg?height=800&width=600",
    "/4.jpg?height=800&width=600",
  ]

  // Messages that correspond to each photo
  const birthdayMessages = [
    "Happy Birthday to my most dearest NIDHI, my go-to person when i need someone always been there for me and listens to everything I say without judging. Always brightens up my mood with your smile like the one in the picture.",
    "Yavaglu ide tara iru childu always be happy whatever happens... happens for a reason and nam hudgi anta olle hudgi ge yavaglu ollede agodu I know.. So never be sad and if you are you know whom to talk to.",
    "I still see you like the girl you are in this image neen nange anta click madi kalsid first picture you were and you are and you will always be a special person in my life NIDHI.",
    "See how much you have changed adre one thing remains constant that childish behaviour which is the most attractive thing I like about you... Always be happy and Always have that big bright smile on your face.",
  ]

  // Confetti effect
  useEffect(() => {
    setShowConfetti(true)
    const timer = setTimeout(() => setShowConfetti(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1))
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 relative overflow-x-hidden overflow-y-auto pb-20">
      {/* Confetti */}
      {showConfetti && <Confetti />}

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          >
            {["🎂", "🎁", "🎈", "✨", "💖", "🎉"][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-purple-800 mb-4 drop-shadow-lg">Happy Birthday!</h1>
          <div className="flex justify-center gap-4 text-pink-600">
            <PartyPopper className="h-8 w-8" />
            <Cake className="h-8 w-8" />
            <Gift className="h-8 w-8" />
            <Heart className="h-8 w-8" />
          </div>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-12 relative"
        >
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Memories</h2>
          <div className="relative rounded-xl overflow-hidden shadow-2xl mx-auto max-w-3xl aspect-[3/2]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhotoIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={photos[currentPhotoIndex] || "/placeholder.svg"}
                  alt={`Photo ${currentPhotoIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <Button
              variant="secondary"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prevPhoto}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="secondary"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextPhoto}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
              {photos.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === currentPhotoIndex ? "bg-white" : "bg-white/50"}`}
                  onClick={() => setCurrentPhotoIndex(i)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Birthday Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-12 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-purple-700 mb-4">A Special Message For You</h2>
          <p className="text-lg text-purple-900 leading-relaxed bg-white/70 p-6 rounded-xl shadow-lg">
            {birthdayMessages[currentPhotoIndex]}
          </p>
        </motion.div>

        {/* Greeting Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Your Birthday Card</h2>

          <div className="relative w-full max-w-md mx-auto perspective">
            <div
              className={`relative transition-transform duration-1000 transform-style-3d cursor-pointer ${isCardOpen ? "rotate-y-180" : ""}`}
              onClick={() => setIsCardOpen(!isCardOpen)}
            >
              {/* Card Front */}
              <Card className="absolute w-full backface-hidden bg-gradient-to-br from-pink-400 to-purple-500 p-6 rounded-xl shadow-2xl text-center">
                <div className="flex flex-col items-center justify-center h-64">
                  <Cake className="h-16 w-16 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Happy Birthday!</h3>
                  <p className="text-white text-lg">Click to open your card</p>
                </div>
              </Card>

              {/* Card Inside */}
              <Card className="absolute w-full backface-hidden rotate-y-180 bg-white p-6 rounded-xl shadow-2xl">
                <div className="flex flex-col items-center justify-center h-64">
                  <h3 className="text-2xl font-bold text-purple-700 mb-4">Wishing You</h3>
                  <p className="text-purple-900 text-lg mb-4">
                    A entire life filled with joy and happiness... Always be happy NIDHIMAA 
                    I don't know when you'll read this but I really hope it makes my special person feel special on their special day..
                  </p>
                  <Heart className="h-12 w-12 text-pink-500 mb-4" />
                  <p className="text-purple-700 font-bold">Click to close</p>
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Confetti Component
function Confetti() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-confetti"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-5%`,
            width: `${5 + Math.random() * 10}px`,
            height: `${5 + Math.random() * 10}px`,
            background: ["#ff0080", "#7928ca", "#0070f3", "#ff4d4d", "#f97316"][Math.floor(Math.random() * 5)],
            borderRadius: Math.random() > 0.5 ? "50%" : "0",
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  )
}

