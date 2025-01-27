'use client'

import React from 'react';
import Header from "./components/Header"
import Hero from "./components/Hero"
import Recursos from "./components/Recursos"
import ComoFunciona from "./components/ComoFunciona"
import Beneficios from "./components/Beneficios"
import { FormularioContato } from "./components/FormularioContato"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Recursos />
        <ComoFunciona />
        <Beneficios />
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <FormularioContato />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

