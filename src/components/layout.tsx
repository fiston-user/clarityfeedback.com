import { twx } from "@/lib/twx";

export const Layout = twx.div((props) => [
  `max-w-5xl w-full mx-auto flex flex-col  gap-4 px-4 py-4`,
]);

export const LayoutContent = twx.div((props) => [`flex-1`]);

export const LayoutTitle = twx.div((props) => [`text-2xl font-bold`]);
