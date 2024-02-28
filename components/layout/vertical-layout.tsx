import { Navbar } from "../navbar";

interface Props {
  children: React.ReactNode;
}
export const VerticalLayout = (props: Props) => {
  return (
    <div className="flex w-100 flex-col">
      <Navbar classContent="bg-secondary" />
      {props.children}
    </div>
  );
};
