import Logo from "../logo";
import { Sidebar } from "../navbar";

interface Props {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
}
export const MainLayout = (props: Props) => {
  return (
    <div className="flex w-full h-max min-h-screen">
      <div className="flex px-2 sm:border-r-2 gap-4 flex-col max-sm:flex-row max-sm:fixed max-sm:max-h-[50px] max-sm:bottom-0 max-sm:w-full z-10 bg-background max-sm:border-t-2">
        <Logo />
        <Sidebar />
      </div>
      <div className="sm:min-h-full w-full sm:container max-sm:mb-[50px] ">
        {props.children}
      </div>
    </div>
  );
};
