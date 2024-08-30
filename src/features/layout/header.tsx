import Image from "next/image";
import { LoggedInButton } from "@/features/auth/loggedin-button";
import { Layout } from "@/components/layout";
import { ModeToggle } from "@/features/theme/mode-toggle";

export const Header = async () => {
  return (
    <header className="w-full border-b border-border py-1">
      <Layout className="flex items-center gap-4">
        <div className="flex-1">
          <Image
            src="/icon.png"
            alt="Clarity Feedback"
            width={32}
            height={32}
          />
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <LoggedInButton />
        </div>
      </Layout>
    </header>
  );
};
