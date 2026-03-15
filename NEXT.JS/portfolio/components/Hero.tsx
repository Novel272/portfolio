import React from "react";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { VscRocket } from "react-icons/vsc";

const Hero = () => {
  return (
    <div className="relative w-full pt-36 pb-20 overflow-hidden">
      {/* Background grid and effects */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage: "linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)",
          mask: "radial-gradient(ellipse at center, transparent 20%, black)",
          WebkitMask: "radial-gradient(ellipse at center, transparent 20%, black)",
        }}
      />

      {/* Spotlight effects */}
      <div className="absolute inset-0 overflow-hidden">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 -top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-20 -left-80 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex justify-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
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
