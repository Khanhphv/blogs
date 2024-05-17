import { AuthContext } from "@/components/authorize";
import { useContext } from "react";

export const withAuth = (WrappedComponent: any) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    const { isAdmin } = useContext(AuthContext);
    return (
      <WrappedComponent viewMode={!isAdmin} isAdmin={isAdmin} {...props} />
    );
  };
};
