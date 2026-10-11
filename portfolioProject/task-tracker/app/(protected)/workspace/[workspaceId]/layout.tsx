import React from "react";
import { workSP } from "@/app/data/workspace/user-workspace";
import { redirect } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebarContainer } from "@/components/sidebar/app-sidebar-container";

interface Props {
  children: React.ReactNode;
  params: Promise<{ workspaceId: string }>;
}

const workSpaceLayout = async ({ children, params }: Props) => {
  const { data } = await workSP();
  if (!data) {
    return redirect("/login");
  }
  const { workspaceId } = await params;
  if (data?.onBoardingCompleted && !data?.workSpace) {
    redirect("/create-workspace");
  } else if (!data?.onBoardingCompleted) {
    redirect("/onboarding");
  }
  return (
    <SidebarProvider>
      <div className="w-full flex bg-background h-screen">
        <AppSidebarContainer data={data} workspaceId={workspaceId} />
        <main className="w-full overflow-y-auto min-h-screen">
          <div className="flex items-start">
            <SidebarTrigger className="pt-3" />
            {/*<Navbar
              id={data?.id}
              name={data?.name as string}
              email={data.email as string}
              image={data?.image as string}
              
            />*/}
          </div>
          <div className="p-0 md:p-4 pt-2">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default workSpaceLayout;
