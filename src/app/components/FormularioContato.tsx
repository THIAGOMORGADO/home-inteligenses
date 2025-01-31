"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { IoLogoWhatsapp } from "react-icons/io";



const schema = yup
  .object({
    nome: yup.string().required("O nome é obrigatório").min(2, "O nome deve ter pelo menos 2 caracteres"),
    email: yup.string().required("O e-mail é obrigatório").email("Por favor, insira um e-mail válido"),
    telefone: yup
      .string()
      .required("O telefone é obrigatório")
      .matches(/^[0-9]{10,11}$/, "O telefone deve ter 10 ou 11 dígitos"),
    descricao: yup
      .string()
      .required("A descrição é obrigatória")
      .min(10, "A descrição deve ter pelo menos 10 caracteres")
      .max(500, "A descrição não pode ter mais de 500 caracteres"),
  })
  .required()

type FormData = yup.InferType<typeof schema>

export function FormularioContato() {
  const [isSubmitting, setIsSubmitting] = useState(false)
 

  const form = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      descricao: "",
    },
  })

  const onSubmit = (data: FormData) => {
   
    const { nome, email, telefone, descricao } = data;
    const message = `Olá, meu nome é ${nome}. Meu e-mail é ${email}. Meu telefone é ${telefone}. Descrição: ${descricao}.`;

    // Codifica a mensagem corretamente
    const encodedMessage = encodeURIComponent(message.trim());

    // Número do WhatsApp
    const phoneNumber = "+5511920052992";

    // Monta o link de maneira exata
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Abre o WhatsApp em uma nova aba
    window.open(whatsappLink, "_blank");

    window.open(whatsappLink, '_blank');
   
      form.reset()
  
   
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Entre em Contato</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="seu@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telefone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(00) 00000-0000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="descricao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Descreva como podemos ajudar você" className="resize-none" {...field} />
                  </FormControl>
                  <FormDescription>Máximo de 500 caracteres.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
           <div className="flex justify-center">
            <Button type="submit" className="w-[50%] hover:bg-green-500" disabled={isSubmitting}>
            <IoLogoWhatsapp />

              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
           </div>
          </form>
        </Form>
   
    </div>
  )
}

