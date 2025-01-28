'use client'

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { smoothScroll } from "@/lib/utils"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-blue-500 text-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-white">CasaInteligente</h3>
            <p className="text-gray-300">Transformando casas em lares inteligentes com tecnologia de ponta.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#recursos"
                  onClick={(e) => smoothScroll(e)}
                  className="hover:text-accent transition-colors"
                >
                  Recursos
                </Link>
              </li>
              <li>
                <Link
                  href="#como-funciona"
                  onClick={(e) => smoothScroll(e)}
                  className="hover:text-accent transition-colors"
                >
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link
                  href="#beneficios"
                  onClick={(e) => smoothScroll(e)}
                  className="hover:text-accent transition-colors"
                >
                  Benefícios
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
            <p className="text-gray-300">Email: <a href="mailto:contato@casainteligente.com" className="hover:text-accent">contato@casainteligente.com</a></p>
            <p className="text-gray-300">Telefone: <span className="hover:text-accent">(11) 1234-5678</span></p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Redes Sociais</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-600 text-center">
          <p className="text-gray-300">&copy; 2025 CasaInteligente. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
