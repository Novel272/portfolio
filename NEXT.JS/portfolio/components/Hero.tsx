import React from "react";
import { Spotlight } from "./ui/spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { VscRocket } from "react-icons/vsc";

const Hero = () => {
  return (
    <div className="pt-36 pb-20 relative">
      <div className="absolute inset-0 opacity-20">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 -top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw] "
          fill="purple"
        />
        <Spotlight className="top-20 -left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="relative z-10 flex justify-center my-20">
        <div
          className={cn(
            "absolute inset-0 -top-12",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        <div className="pointer-events-none absolute inset-0 -top-12 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center relative z-10">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            className=" text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into seamless experience"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Mohamed, a passionate web developer specializing in
            Next.js.
          </p>
          <a href="#about">
            <MagicButton
              title="My Work"
              icon={<VscRocket />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
