import { userReq } from "@/app/data/user/is-user-auth";
import CreateWorkspaceForm from "@/components/workSpace/create-workspace";
import React from "react";
import { redirect } from "next/navigation";
import { workSP } from "@/app/data/workspace/user-workspace";

const page = async () => {
  const { data } = await workSP();

  if (!data?.onBoardingCompleted) {
    redirect("/onboarding");
  }

  return (
    <div>
      <CreateWorkspaceForm />
    </div>
  );
};

export default page;
