"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { smoothScroll } from "@/lib/utils"
import { DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@/components/ui/visually-hidden"
// Removed VisuallyHidden import due to the lint error
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { name: "Recursos", href: "/#recursos" },
    { name: "Como Funciona", href: "/#como-funciona" },
    { name: "Benefícios", href: "/#beneficios" },
    { name: "Nossos Trabalhos", href: "/nossos-trabalhos" },
  ]

  const isHomePage = pathname === "/"

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? "bg-background shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled || !isHomePage ? "text-primary" : "text-white"
            }`}
          >
            CasaInteligente
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`transition-colors duration-200 ${
                      isScrolled || !isHomePage ? "text-foreground hover:text-primary" : "text-white hover:text-accent"
                    }`}
                    onClick={(e) => (isHomePage && item.href.startsWith("/#") ? smoothScroll(e) : null)}
                  >
                    {item.name}
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
                className={`md:hidden ${isScrolled || !isHomePage ? "text-foreground" : "text-white"}`}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <DialogTitle>
                <VisuallyHidden>Menu</VisuallyHidden>
              </DialogTitle>
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors"
                    onClick={() => {
                      if (isHomePage && item.href.startsWith("/#")) {
                        smoothScroll({ preventDefault: () => {}, currentTarget: { href: item.href } } as any)
                      }
                      document.body.classList.remove("overflow-hidden")
                    }}
                  >
                    {item.name}
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

