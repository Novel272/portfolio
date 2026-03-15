import { workExperience } from "@/data";
import React, { useMemo } from "react";
import Image from "next/image";
import { Button } from "./ui/moving-border";

const Experience = () => {
  const durations = useMemo(() => {
    // eslint-disable-next-line
    return workExperience.map(() => Math.floor(Math.random() * 1000) + 1000);
  }, []);

  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        My
        <span className="text-purple"> Experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-col-4 grid-col-1 gap-10">
        {workExperience.map((card, id) => (
          <Button
            key={id}
            duration={durations[id]}
            borderRadius="1.73rem"
            className="flex-1 text-white border-natural-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-col flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                width={128}
                height={128}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
