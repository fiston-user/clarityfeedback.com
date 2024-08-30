import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string(),
  slug: z
    .string()
    .transform((val) => val.replace(/\s+/g, "-").toLowerCase())
    .pipe(
      z.string().regex(/^[a-z0-9-]{5,20}$/, {
        message:
          "Slug must be 5-20 characters long and contain only lowercase letters, numbers, and hyphens",
      })
    ),
  noteText: z.string().optional().nullable(),
  informationTitle: z.string().optional().nullable(),
  reviewTitle: z.string().optional().nullable(),
  thanksTitle: z.string().optional().nullable(),
  backgroundColor: z.string().optional().nullable(),
});

export type ProductType = z.infer<typeof ProductSchema>;

export const GRADIENT_COLORS = [
  "bg-gradient-to-r from-blue-500 to-blue-600",
  "bg-gradient-to-r from-green-500 to-green-600",
  "bg-gradient-to-r from-red-500 to-red-600",
  "bg-gradient-to-r from-yellow-500 to-yellow-600",
  "bg-gradient-to-r from-purple-500 to-purple-600",
  "bg-gradient-to-r from-pink-500 to-pink-600",
];
