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

export default function ErrorPage() {
  return (
    <Layout>
      <Card>
        <CardHeader>
          <CardTitle>Error</CardTitle>
          <CardDescription>Something went wrong</CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton />
        </CardContent>
      </Card>
    </Layout>
  );
}
