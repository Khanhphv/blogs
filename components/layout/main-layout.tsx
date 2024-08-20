import Logo from "../logo";
import { Sidebar } from "../navbar";

interface Props {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
}
export const MainLayout = (props: Props) => {
  return (
    <div
      className={`flex w-full overflow-hidden  ${
        props.direction === "vertical" ? "flex-col" : "flex-row h-screen"
      } `}
    >
      <div className="bg-secondary border-r-2">
        <Logo />
        <Sidebar
          classContent={`${
            props.direction === "vertical" ? "flex-row" : "flex-col"
          }  `}
        />
      </div>
      {props.children}
    </div>
  );
};
