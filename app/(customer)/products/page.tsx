import { requiredCurrentUser } from "@/auth/current-user";
import { Layout, LayoutTitle } from "@/components/layout";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { prisma } from "@/lib/prisma";
import { PageParams } from "@/types/next";
import Link from "next/link";

export default async function ProductPage(props: PageParams<{}>) {
  const user = await requiredCurrentUser();

  const products = await prisma.product.findMany({
    where: { userId: user.id },
  });

  return (
    <Layout>
      <LayoutTitle>Products</LayoutTitle>
      <Card className="p-4">
        {products.length ? (
          <Table>
            <TableHeader>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Link
            href="/products/new"
            className="hover:bg-primary/10 flex items-center justify-center transition-all duration-300 border-2 border-dashed border-primary p-8 lg:p-12 w-full rounded-md"
          >
            Add Product
          </Link>
        )}
      </Card>
    </Layout>
  );
}
