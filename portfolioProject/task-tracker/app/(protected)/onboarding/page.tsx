import React from "react";
import { workSP } from "@/app/data/workspace/user-workspace";
import { redirect } from "next/navigation";
import OnBoardingForm from "@/components/onboardform";
import { userReq } from "@/app/data/user/is-user-auth";

const page = async () => {
  const { data } = await workSP();
  const { user } = await userReq();
  if (data?.onBoardingCompleted && data?.workSpace.length > 0) {
    redirect("/workspace");
  } else if (data?.onBoardingCompleted) {
    redirect("/create-workspace");
  }

  const name = `${user?.given_name || ""} ${user?.family_name || ""}`;
  return (
    <div className="">
      <OnBoardingForm
        name={name}
        email={user?.email as string}
        image={user?.picture || ""}
      />
    </div>
  );
};

export default page;
