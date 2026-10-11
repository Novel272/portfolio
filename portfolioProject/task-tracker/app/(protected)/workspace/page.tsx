import React from "react";
import { workSP } from "@/app/data/workspace/user-workspace";
import { redirect } from "next/navigation";

const page = async () => {
  const { data } = await workSP();
  if (data?.onBoardingCompleted && data?.workSpace.length === 0) {
    redirect("/create-workspace");
  } else if (!data?.onBoardingCompleted) {
    redirect("/onboarding");
  } else {
    redirect(`/workspace/${data?.workSpace[0].workspaceId}`);
  }
};

export default page;
