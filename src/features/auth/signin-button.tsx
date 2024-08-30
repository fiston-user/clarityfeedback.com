import { signIn } from "@/auth/auth";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

export const SignInButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button variant="secondary" size="sm" type="submit">
        <LogIn size={16} className="mr-2" />
        Signin with Google
      </Button>
    </form>
  );
};
