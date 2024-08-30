"use client";

import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { signInAction } from "./auth.action";

export const SignInButton = () => {
  return (
    <Button variant="secondary" size="sm" onClick={() => signInAction()}>
      <FaGoogle size={16} className="mr-2" />
      Signin with Google
    </Button>
  );
};
