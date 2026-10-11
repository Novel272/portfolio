import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <p>your daily personal task Tracker</p>
            <p className="text-5xl md:text-6xl">
              for <span className="text-purple-400">better and organized</span>
              life
            </p>
          </h1>
          <p className="mt-6 text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Here is a link to my raw subtitle files. This is intended for people
            who already have an un-subtitled copy of the video. If you plan on
            using these, you MUST install the included fonts here. Otherwise,
            the subs for the intermission will not work properly. I recommend
            watching with VLC.
          </p>
          {isLoggedIn ? (
            <>
              <Button asChild>
                <Link href="/workspace">WorkSpace</Link>
              </Button>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center gap-4 mt-6">
                <Button>
                  <RegisterLink>Get Started</RegisterLink>
                </Button>
                <Button asChild variant="outline">
                  <LoginLink>Sign-in</LoginLink>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
