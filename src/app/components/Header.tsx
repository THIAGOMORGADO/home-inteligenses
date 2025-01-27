"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { smoothScroll } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = ["Recursos", "Como Funciona", "Benefícios"]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            CasaInteligente
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className={`transition-colors duration-200 ${
                      isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent"
                    }`}
                    onClick={(e) => smoothScroll(e)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-foreground hover:text-primary transition-colors"
                    onClick={(e) => {
                      smoothScroll(e)
                      document.body.classList.remove("overflow-hidden")
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

