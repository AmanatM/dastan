"use client";
import React from "react";

import { Input } from "@/components/ui/input";
import { Section } from "@/components/common/layout";
import { Button } from "./ui/button";

export function Newsletter() {
  return (
    <Section className="bg-card !py-10" container="full">
      <div className="container mx-auto flex flex-col gap-4 px-6 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-start gap-1">
          <h5 className="text-xl font-medium lg:text-2xl">Stay Ahead of the AI Curve</h5>
          <p className="text text-muted-foreground dark:text-dark-text-tertiary lg:text-lg">
            Join our newsletter for exclusive insights and updates on the latest AI trends.
          </p>
        </div>

        <form className="w-full max-w-[400px] flex-1">
          <div className="relative ">
            <Input
              required
              name="email"
              placeholder="Enter your email"
              type="email"
              className="rounded-full h-11 py-2 pl-4 pr-28"
            />
            <Button
              type="submit"
              size={"default"}
              className="absolute right-1.5 top-1.5 px-4 py-0 rounded-full bg-foreground text-background"
            >
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
}
