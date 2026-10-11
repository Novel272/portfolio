"use server";

import { UserTypeData } from "@/components/onboardform";
import { userReq } from "../data/user/is-user-auth";
import { userSchema } from "@/lib/schema";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export const createUser = async (data: UserTypeData) => {
  const { user } = await userReq();
  if (!user?.id || !user.email) {
    redirect("/api/auth/login");
  }
  const validation = userSchema.parse(data);
  const userData = await db.user.create({
    data: {
      id: user.id,
      email: user.email,
      name: validation.name,
      image: user.picture || "",
      about: validation.about,
      country: validation.country,
      role: validation.role,
      industryType: validation.industryType || "",
      onBoardingCompleted: true,
      subscriptions: {
        create: {
          plan: "FREE",
          status: "ACTIVE",
          currentPeriodEnd: new Date(),
          cancelAtPeriodEnd: false,
        },
      },
    },
    select: {
      id: true,
      name: true,
      email: true,
      workSpace: true,
    },
  });

  //send user email
  if (userData.workSpace.length === 0) {
    redirect("/create-workspace");
  }
  redirect("/workspace");
};
