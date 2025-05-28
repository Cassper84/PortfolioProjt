"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        alert("Failed to send message. Please try again.");
        setStatus("idle");
      }
    } catch (error) {
      alert("An unexpected error occurred.");
      setStatus("idle");
    } finally {
      setLoading(false);
    }
  }

  // Reset status when user starts typing again
  useEffect(() => {
    const subscription = form.watch(() => {
      if (status === "sent") setStatus("idle");
    });
    return () => subscription.unsubscribe();
  }, [form, status]);

  return (
    <div className="max-w-xl mx-auto mt-12 px-4">
      <h1 className="text-3xl text-center font-bold mb-6">Contact Me</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Type your message..." rows={5} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full" disabled={loading}>
            {status === "sending" ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                Sending...
              </span>
            ) : status === "sent" ? (
              "Sent"
            ) : (
              "Send Message"
            )}
          </Button>


          {status === "sent" && (
            <p className="text-green-600 text-center">
              Your message has been sent successfully. I will get back to you soon!
            </p>
          )}
        </form>
      </Form>
    </div>
  );
}
