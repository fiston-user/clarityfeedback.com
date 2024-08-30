"use server";

import { ActionError, userAction } from "@/safe-action";
import { ProductSchema } from "./product.schema";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const verifySlugUnique = async (slug: string, productId?: string) => {
  const slugExists = await prisma.product.count({
    where: { slug, id: productId ? { not: productId } : undefined },
  });

  if (slugExists) {
    throw new ActionError("Slug already exists");
  }
};

export const createProductAction = userAction(
  ProductSchema,
  async (input, context) => {
    await verifySlugUnique(input.slug);

    const product = await prisma.product.create({
      data: {
        ...input,
        userId: context.user.id,
      },
    });

    return product;
  }
);

export const editProductAction = userAction(
  z.object({ id: z.string(), data: ProductSchema }),
  async (input, context) => {
    await verifySlugUnique(input.data.slug, input.id);

    const product = await prisma.product.update({
      where: { id: input.id, userId: context.user.id },
      data: input.data,
    });

    return product;
  }
);
