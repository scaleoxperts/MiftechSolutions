"use client"

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    lenisRef.current = lenis

    return () => {
      lenisRef.current?.destroy()
    }
  }, [])

  return <div>{children}</div>
}
