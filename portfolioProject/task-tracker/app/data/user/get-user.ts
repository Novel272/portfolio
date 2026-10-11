import { db } from "@/lib/db";
import { userReq } from "./is-user-auth";

export const getUserById = async () => {
  try {
    const { user } = await userReq();

    const data = await db.user.findUnique({
      where: { id: user?.id },
    });
    return data;
  } catch (err) {
    return {
      success: false,
      error: true,
      message: "Error fetching user",
      data: null,
    };
  }
};
