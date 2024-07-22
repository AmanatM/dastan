"use client"
import { ButtonFormSubmit } from "@/components/ui/button-form-loading"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"

import { toast } from "sonner"
import { useState } from "react"

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string().min(10).max(500),
  access_key: z.string(),
})

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      access_key: process.env.FORM_API,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setPending(true)
    const json = JSON.stringify(values)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })

    const result = await response.json()
    if (result.success) {
      form.reset()
      toast.success("Form submitted successfully!")
    } else {
      toast.error("Failed to submit the form. Please try again later.")
    }
    setPending(false)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mt-5 grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Name" {...field} />
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
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="col-span-2 text-base">
                <FormControl>
                  <Textarea placeholder="Message" className="min-h-[150px] resize-none" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <ButtonFormSubmit
            type="submit"
            className="text-bases col-span-2 mt-3"
            variant={"default"}
            size={"lg"}
            loading={pending}
          >
            Send
          </ButtonFormSubmit>
        </div>
      </form>
    </Form>
  )
}
