"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const formAiMusicSchema = z.object({
  genre: z.string().min(3, "Genre must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

export function AiMusicForm({
  onSubmit,
}: {
  onSubmit: (values: z.infer<typeof formAiMusicSchema>) => Promise<void>;
}) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const formAi = useForm<z.infer<typeof formAiMusicSchema>>({
    resolver: zodResolver(formAiMusicSchema),
    defaultValues: {
      genre: "",
      description: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formAiMusicSchema>) => {
    setIsLoading(true);
    try {
      await onSubmit(values);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-muted/60 dark:bg-card" data-aos="fade-up">
      <CardHeader
        className="text-primary text-2xl"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        Create AI Music
      </CardHeader>
      <CardContent>
        <Form {...formAi}>
          <form
            onSubmit={formAi.handleSubmit(handleSubmit)}
            className="grid w-full gap-4"
          >
            <FormField
              control={formAi.control}
              name="genre"
              render={({ field }) => (
                <FormItem data-aos="fade-right" data-aos-delay="300">
                  <FormLabel>Genre</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the music genre" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={formAi.control}
              name="description"
              render={({ field }) => (
                <FormItem data-aos="fade-left" data-aos-delay="400">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter a description for the music"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="default"
              className="mt-4 !bg-[#ea580c]"
              disabled={isLoading}
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              {isLoading ? "Submitting..." : "Create Music"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
