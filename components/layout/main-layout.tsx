import Logo from "../logo";
import { Navbar } from "../navbar";

interface Props {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
}
export const MainLayout = (props: Props) => {
  return (
    <div
      className={`flex w-full grow ${
        props.direction === "vertical" ? "flex-col" : "flex-row"
      } `}
    >
      <div className="bg-secondary ">
        <Logo />
        <Navbar
          classContent={`${
            props.direction === "vertical" ? "flex-row" : "flex-col"
          }  `}
        />
      </div>
      {props.children}
    </div>
  );
};
