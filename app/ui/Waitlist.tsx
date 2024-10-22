"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function Waitlist() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError(null);
    try {
      const response = await fetch("/api/slack", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } else {
        setError(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An unexpected error occurred. Please try again later.");
    }
  }

  return (
    <section className="flex flex-col items-center mx-auto h-auto my-6">
      {isSubmitted ? (
        <div className="text-center">
          <h3 className="text-lg font-semibold">
            Thank you for joining our waitlist!
          </h3>
          <p className="mt-2">We&apos;ll keep you updated on our progress.</p>
        </div>
      ) : (
        <>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col space-y-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col justify-center">
                    <div className="flex flex-row">
                      <FormControl className="flex-grow">
                        <Input
                          className={`w-full w-[280px] ${
                            form.formState.errors.email ? "border-red-500" : ""
                          }`}
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <Button
                        type="submit"
                        className="ml-2 bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
                        size="default"
                        variant="secondary"
                      >
                        Join Waitlist
                      </Button>
                    </div>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />
            </form>
          </Form>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </>
      )}
    </section>
  );
}
