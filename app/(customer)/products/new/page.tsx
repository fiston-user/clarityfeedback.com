import { Layout, LayoutTitle } from "@/components/layout";
import { PageParams } from "@/types/next";
import ProductForm from "../[productId]/edit/product-form";

export default async function NewProductPage(props: PageParams<{}>) {
  return (
    <Layout>
      <LayoutTitle>New Product</LayoutTitle>
      <ProductForm />
    </Layout>
  );
}
