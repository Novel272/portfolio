import { ProjectProps, WorkspaceMemberProps } from "@/utils/types";
import { User } from "@prisma/client";
import { SideBarDataProps } from "./app-sidebar-container";
import { Sidebar, SidebarGroupLabel, SidebarHeader } from "../ui/sidebar";
import { Avatar, AvatarImage } from "../ui/avatar";
export const AppSideBar = ({
  data,
  projects,
  workspaceMember,
  user,
}: {
  data: SideBarDataProps;
  projects: ProjectProps[];
  workspaceMember: WorkspaceMemberProps[];
  user: User;
}) => {
  return (
    <>
      <Sidebar collapsible="icon">
        <SidebarHeader className="bg-background">
          <div className="flex items-center">
            <Avatar>
              <AvatarImage src={"/wrench.svg"}></AvatarImage>
            </Avatar>
            <SidebarGroupLabel>
              <span className="text-xl font-bold">
                daily personal task Tracker
              </span>
            </SidebarGroupLabel>
          </div>
        </SidebarHeader>
      </Sidebar>
    </>
  );
};
