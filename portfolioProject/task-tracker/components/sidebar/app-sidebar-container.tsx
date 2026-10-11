import { $Enums, User } from "@prisma/client";
import { getWorkProjectsByWorkspaceId } from "@/app/data/project/get-workspacebyid";
import { getUserById } from "@/app/data/user/get-user";
import { AppSideBar } from "./app-sidebar";
import { ProjectProps, WorkspaceMemberProps } from "@/utils/types";

export interface SideBarDataProps extends User {
  workSpace: {
    id: string;
    name: string;
    userId: string;
    workspaceId: string;
    createdAt: string;
    accessLevel: $Enums.AccessLevel;
    WorkSpace: {
      name: string;
    };
  }[];
}

export const AppSidebarContainer = async ({
  data,
  workspaceId,
}: {
  data: SideBarDataProps;
  workspaceId: string;
}) => {
  const { projects, workSpaceMembers } =
    await getWorkProjectsByWorkspaceId(workspaceId);
  const user = await getUserById();

  return (
    <AppSideBar
      data={data}
      user={user as User}
      projects={projects as ProjectProps[]}
      workspaceMember={workSpaceMembers as unknown as WorkspaceMemberProps[]}
    />
  );
};
