import { z } from "zod";

export const FormDataSchema = z.object({
  name: z.string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),

  email: z.string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  phone: z.string()
    .min(1, "Phone number is required")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must not exceed 15 digits")
    .regex(/^[\d\s\-\+\(\)]+$/, "Phone number can only contain digits, spaces, hyphens, plus signs, and parentheses"),

  message: z.string()
    .optional()
    .default("NO-MESSAGE")
    .transform((val) => val?.trim() === "" ? "NO-MESSAGE" : val)
});

export type FormData = z.infer<typeof FormDataSchema>;