import { WorkSpace, AccessLevel } from "@prisma/client";

export interface WorkspaceMemberProps extends WorkSpace {
  user: {
    id: string;
    name: string;
    email: string;
    image: string;
  };
  projectAcess: {
    id: string;
    hasAccess: AccessLevel;
    projectId: string;
  }[];
}

export interface ProjectProps {
  id: string;
  name: string;
  description: string;
  workSpaceId: string;
  members: {
    id: string;
    userId: string;
    workspaceId: string;
    accessLevel: AccessLevel;
    createdAt: string;
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
    };
  }[];
}
