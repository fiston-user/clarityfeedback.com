import { getCurrentUser, requiredCurrentUser } from "@/auth/current-user";
import { Layout, LayoutTitle } from "@/components/layout";
import { prisma } from "@/lib/prisma";
import { PageParams } from "@/types/next";
import ProductForm from "./product-form";
import { notFound } from "next/navigation";

export default async function EditProductPage(
  props: PageParams<{ productId: string }>
) {
  const user = await requiredCurrentUser();

  const product = await prisma.product.findUnique({
    where: {
      id: props.params.productId,
      userId: user.id,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Layout>
      <LayoutTitle>Edit Product</LayoutTitle>
      <ProductForm productId={product.id} defaultValues={product} />
    </Layout>
  );
}
