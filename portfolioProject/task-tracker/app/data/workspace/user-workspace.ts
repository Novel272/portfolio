import { userReq } from "../user/is-user-auth";
import { db } from "@/lib/db";
export const workSP = async () => {
  try {
    const { user } = await userReq();
    const workspace = await db.user.findUnique({
      where: { id: user?.id },
      include: {
        workSpace: {
          select: {
            id: true,
            userId: true,
            workspaceId: true,
            accessLevel: true,
            createdAt: true,
            workSpace: { select: { name: true } },
          },
        },
      },
    });
    return { data: workspace };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      error: true,
      message: "Error fetching workspace",
      data: null,
    };
  }
};
