import Logo from "../logo";
import { Sidebar } from "../navbar";

interface Props {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
}
export const MainLayout = (props: Props) => {
  return (
    <div className="flex w-full overflow-hidden h-screen max-sm:flex-col-reverse">
      <div className="flex  border-r-2  flex-col max-sm:flex-row max-sm:max-h-[50px] ">
        <Logo />
        <Sidebar />
      </div>
      <div className="sm:min-h-full w-full flex overflow-auto grow">
        {props.children}
      </div>
    </div>
  );
};
