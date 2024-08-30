import { Header } from "@/features/layout/header";
import { LayoutParamas } from "@/types/next";

export default async function CustomerLayout(props: LayoutParamas<{}>) {
  return (
    <div className="h-full">
      <Header />
      {props.children}
    </div>
  );
}
