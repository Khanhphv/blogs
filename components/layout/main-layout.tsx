import Logo from "../logo";
import { Sidebar } from "../navbar";

interface Props {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
}
export const MainLayout = (props: Props) => {
  return (
    <div
      className={`flex w-full h-max min-h-screen ${
        props.direction === "vertical" ? "flex-col" : "flex-row"
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
