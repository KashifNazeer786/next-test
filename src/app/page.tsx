import { HeroScrollDemo } from "../components/ContainerScrollAnimation";
import { InfiniteMovingCardsDemo } from "../components/InfiniteMovingCard";
import { ParallaxScrollDemo } from "../components/ParallaxGridScroll";
import { HeroParallaxDemo } from "../components/HeroParallax";
import { StickyScrollRevealDemo } from "../components/StickyScrollReveal";
import { TypewriterEffectSmoothDemo } from "../components/Typewriter";
import { FollowingPointerDemo } from "../components/FollowingCursor";

export default function Home() {
  return (
    <div>
      <HeroScrollDemo />
      <InfiniteMovingCardsDemo />
      <ParallaxScrollDemo />
      <HeroParallaxDemo />
      <StickyScrollRevealDemo />
      <TypewriterEffectSmoothDemo />
      <FollowingPointerDemo />
    </div>
  );
}
