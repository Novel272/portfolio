"use client";
import React from "react";
import { z } from "zod";
import { userSchema, workspaceSchema } from "@/lib/schema";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUser } from "@/app/action/user";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { countryList } from "@/utils/countries";
import { industryTypesList, roleList } from "@/utils";
import { Textarea } from "../ui/textarea";
import { createNewWorkSpace } from "@/app/action/workspaces";
import { useRouter } from "next/navigation";

export type createWorkspaceData = z.infer<typeof workspaceSchema>;

const CreateWorkspaceForm = () => {
  const [pending, setpending] = useState(false);
  const router = useRouter();
  const form = useForm<createWorkspaceData>({
    resolver: zodResolver(workspaceSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = async (data: createWorkspaceData) => {
    try {
      setpending(true);
      const { data: res } = await createNewWorkSpace(data);

      toast.success("Workspace created successfully");
      router.push(`/workspace/${res?.id as string}`);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>WorkSpace building</CardTitle>
          <CardDescription>Build the workspace</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>WorkSpace Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Architecture project team"
                        {...field}
                      />
                      <FormMessage />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Description of the workspace"
                      ></Textarea>
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex flex-row items-center gap-4">
                <Button
                  type="button"
                  variant={"outline"}
                  disabled={pending}
                  className="w-full"
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={pending} className="w-full">
                  Create Workspace
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateWorkspaceForm;
