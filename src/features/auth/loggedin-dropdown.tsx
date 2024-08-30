"use client";

import { signOut } from "@/auth/auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PropsWithChildren } from "react";
import { signOutAction } from "./auth.action";
import { LogOut } from "lucide-react";
import { redirect } from "next/navigation";

export type LoggedInDropdownProps = PropsWithChildren;

export const LoggedInDropdown = (props: LoggedInDropdownProps) => {
  function handleSignOut() {
    signOutAction();
    redirect("/");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{props.children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut size={16} className="mr-2" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
