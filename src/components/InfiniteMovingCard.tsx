"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-card";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I highly highly recommend Flutter Desk to any company looking for full stack developers. Always Great Customer Service.",
    name: "Jim Jordan",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "FlutterDesk had a great delivery, they were on time and had great communication. Overall the process was smooth and efficient.",
    name: "Kevin Heard",
    title: "Hamlet",
  },
  {
    quote: "I highly highly recommend Flutter Desk to any company looking for full stack developers. Always Great Customer Service.",
    name: "Jim Jordan",
    title: "A Dream Within a Dream",
  },
];
