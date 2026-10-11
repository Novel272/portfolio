import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(5, "Must at least be 5 characters")
    .max(50, "Must be less than 50 characters"),
  about: z.string().optional(),
  country: z
    .string()
    .min(4, "Must at least be 4 characters")
    .max(50, "Must be less than 50 characters"),
  industryType: z.string().optional(),
  role: z.string(),
  email: z.string().email(),
  image: z.string().optional(),
});

export const workspaceSchema = z.object({
  name: z
    .string()
    .min(5, "Must at least be 5 characters")
    .max(100, "Must be less than 50 characters"),
  description: z.string().optional(),
});
