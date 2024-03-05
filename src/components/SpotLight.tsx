import React from "react";
import {Spotlight} from "./ui/spotlight";
import {SignupFormDemo} from "@/src/components/SignUp";

export function SpotlightPreview() {
    return (
        <div
            className="h-[40rem] flex-1 rounded-md flex md:items-center md:justify-center bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className={"flex items-center justify-around w-full px-10 flex-col md:flex-row"}>
                <div className=" p-4 max-w-7xl relative z-10 pt-20 md:pt-0">
                    <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Top 1%<br/>Flutter Developers <br/> for Hire
                    </h1>
                    <p className="mt-4 font-normal text-base text-neutral-300 max-w-2xl">
                        Hire Flutter developers to turn your complex business ideas into easy-to-use, real-world, highly
                        scalable cross-platform Android, iOS, Web, and Desktop apps across all the digital platforms
                        through flutter app development services.
                    </p>
                    <ul className={'mt-5 flex items-center justify-between list-disc'}>
                        <li className={"text-neutral-300"}>7-Day Risk-Free Trial</li>
                        <li className={"text-neutral-300"}>Flexible Hiring Model</li>
                        <li >12/7 Customer Support</li>
                    </ul>
                </div>
                <SignupFormDemo/>
            </div>
        </div>
    );
}
