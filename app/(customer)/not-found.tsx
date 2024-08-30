"use client";

import { Layout } from "@/components/layout";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { SignInButton } from "@/features/auth/signin-button";

export default function NotFoundPage() {
  return (
    <Layout>
      <Card>
        <CardHeader>
          <CardTitle>Product not found</CardTitle>
          <CardDescription>
            The product you are looking for does not exist.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton />
        </CardContent>
      </Card>
    </Layout>
  );
}
