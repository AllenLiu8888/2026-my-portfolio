"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function CreativeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let devicePixelRatio = window.devicePixelRatio || 1
    let rafId = 0
    let running = true

    // Set canvas dimensions. Setting canvas.width/height implicitly resets
    // the transform; we then re-apply DPR scaling via setTransform to make
    // sure repeat calls never compound the scale.
    const setCanvasDimensions = () => {
      devicePixelRatio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = Math.max(1, Math.floor(rect.width * devicePixelRatio))
      canvas.height = Math.max(1, Math.floor(rect.height * devicePixelRatio))
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
    }

    setCanvasDimensions()

    // Mouse position
    let mouseX = -9999
    let mouseY = -9999
    let targetX = -9999
    let targetY = -9999

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      targetX = e.clientX - rect.left
      targetY = e.clientY - rect.top
    }

    // When the pointer leaves the window / canvas region, park the target
    // far off-canvas so particles can spring back to their base positions
    // instead of getting permanently pushed against an edge.
    const onMouseLeave = () => {
      targetX = -9999
      targetY = -9999
    }

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseout", onMouseLeave)
    document.addEventListener("mouseleave", onMouseLeave)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      baseX: number
      baseY: number
      density: number
      color: string
      distance: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.baseX = x
        this.baseY = y
        this.size = Math.random() * 5 + 2
        this.density = Math.random() * 30 + 1
        this.distance = 0

        const hue = Math.random() * 60 + 270
        this.color = `hsl(${hue}, 70%, 60%)`
      }

      update() {
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        this.distance = Math.sqrt(dx * dx + dy * dy)

        const maxDistance = 100
        if (this.distance < maxDistance && this.distance > 0) {
          const force = (maxDistance - this.distance) / maxDistance
          const forceDirectionX = dx / this.distance
          const forceDirectionY = dy / this.distance
          this.x -= forceDirectionX * force * this.density
          this.y -= forceDirectionY * force * this.density
        } else {
          if (this.x !== this.baseX) this.x -= (this.x - this.baseX) / 10
          if (this.y !== this.baseY) this.y -= (this.y - this.baseY) / 10
        }
      }

      draw() {
        ctx!.fillStyle = this.color
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx!.closePath()
        ctx!.fill()
      }
    }

    const particlesArray: Particle[] = []
    const gridSize = 30

    function init() {
      particlesArray.length = 0
      const canvasWidth = canvas!.width / devicePixelRatio
      const canvasHeight = canvas!.height / devicePixelRatio
      const numX = Math.floor(canvasWidth / gridSize)
      const numY = Math.floor(canvasHeight / gridSize)
      for (let y = 0; y < numY; y++) {
        for (let x = 0; x < numX; x++) {
          const posX = x * gridSize + gridSize / 2
          const posY = y * gridSize + gridSize / 2
          particlesArray.push(new Particle(posX, posY))
        }
      }
    }

    init()

    // Animation loop. We clear in raw pixel space using setTransform-identity
    // to guarantee the entire backing store is wiped each frame, then restore
    // the DPR scale before drawing. This eliminates the edge-trail bug where
    // a stale transform left the bottom / right edges un-cleared.
    const animate = () => {
      if (!running) return

      ctx.save()
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.restore()

      mouseX += (targetX - mouseX) * 0.1
      mouseY += (targetY - mouseY) * 0.1

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()

        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x
          const dy = particlesArray[i].y - particlesArray[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 30) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(180, 120, 255, ${0.2 - distance / 150})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
            ctx.stroke()
          }
        }
      }

      rafId = requestAnimationFrame(animate)
    }

    animate()

    const onResize = () => {
      setCanvasDimensions()
      init()
    }
    window.addEventListener("resize", onResize)

    return () => {
      running = false
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseout", onMouseLeave)
      document.removeEventListener("mouseleave", onMouseLeave)
    }
  }, [])

  return (
    <motion.div
      className="w-full h-[400px] md:h-[500px] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
    </motion.div>
  )
}
