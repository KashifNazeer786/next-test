"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Discovery Call",
    description:
        "Start your journey with FlutterDesk by speaking directly to key developers and sharing your vision, ambitions, and challenges. We specialize in turning problems into innovative solutions across varied domains, and we welcome free ideation sessions to explore the potential of your ideas.",
  },
  {
    title: "Strategic Planning & Validation",
    description:
        "After our initial discussion, we seamlessly merge your distinct requirements with our vast experience. This ensures a tailored approach to your project, prioritizing clarity, precision, and a keen understanding of your vision.",
  },
  {
    title: "Design & Roadmapping",
    description:
        "We prioritize design and road mapping to visualize and validate ideas early through detailed prototypes. This proactive approach allows you to foresee the final product and its impact, mitigating the risks and uncertainties associated with the development.",
  },
  {
    title: "Development and Enhancement",
    description:
        "Full transparency is practiced, offering you a real-time perspective on the development process. Each task is meticulously detailed, providing a clear and coherent insight into the progress, ensuring the final product aligns seamlessly with your vision.",
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
