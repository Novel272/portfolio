"use server";
import { createWorkspaceData } from "@/components/workSpace/create-workspace";
import { userReq } from "../data/user/is-user-auth";
import { workspaceSchema } from "@/lib/schema";
import { db } from "@/lib/db";
import { genrateInviteCode } from "@/utils/genrate-invite-code";

export const createNewWorkSpace = async (data: createWorkspaceData) => {
  const { user } = await userReq();
  const validData = workspaceSchema.parse(data);

  const res = await db.workSpace.create({
    data: {
      name: validData.name,
      description: validData.description,
      ownerId: user?.id,
      inviteCode: genrateInviteCode(),
      members: {
        create: {
          userId: user?.id ?? "",
          role: "Admin",
        },
      },
    },
  });
  return { data: res };
};
