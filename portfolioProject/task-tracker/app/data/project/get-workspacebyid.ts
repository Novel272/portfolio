import { userReq } from "../user/is-user-auth";
import { db } from "@/lib/db";
import { AccessLevel, Prisma } from "@prisma/client";
export const getWorkProjectsByWorkspaceId = async (workspaceId: string) => {
  try {
    const { user } = await userReq();
    const isUserMember = await db.workSpaceMember.findUnique({
      where: {
        userId_workspaceId: {
          userId: user?.id || "",
          workspaceId,
        },
      },
    });
    if (!isUserMember) {
      throw new Error("User is not a member of this workspace");
    }
    const query: Prisma.ProjectWhereInput =
      isUserMember.role === AccessLevel.Admin
        ? { workSpaceId: workspaceId }
        : {
            projectAccess: {
              some: {
                hasAccess: true,
                workSpaceMember: {
                  userId: user?.id || "",
                  workspaceId,
                },
              },
            },
          };
    const [projects, workSpaceMembers] = await Promise.all([
      db.project.findMany({
        where: query,
        select: { name: true, id: true, workSpaceId: true, description: true },
      }),
      db.workSpaceMember.findMany({
        where: { workspaceId },
        include: {
          User: {
            select: { name: true, id: true, profileImage: true },
          },
        },
      }),
    ]);
    return { projects, workSpaceMembers };
  } catch {
    console.log("error");
    return {
      success: false,
      error: true,
      message: "Error fetching workspace",
    };
  }
};
