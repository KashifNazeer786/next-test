import {InfiniteMovingCardsDemo} from "../components/InfiniteMovingCard";
import {ParallaxScrollDemo} from "../components/ParallaxGridScroll";
import {HeroParallaxDemo} from "../components/HeroParallax";
import {StickyScrollRevealDemo} from "../components/StickyScrollReveal";
import {TypewriterEffectSmoothDemo} from "../components/Typewriter";
import {FollowingPointerDemo} from "../components/FollowingCursor";
import {SpotlightPreview} from "@/src/components/SpotLight";

export default function Home() {
    return (
        <div>
            <SpotlightPreview/>
            <ParallaxScrollDemo/>
            <HeroParallaxDemo/>
            <StickyScrollRevealDemo/>
            <InfiniteMovingCardsDemo/>
            <TypewriterEffectSmoothDemo/>
            <FollowingPointerDemo/>
        </div>
    );
}
