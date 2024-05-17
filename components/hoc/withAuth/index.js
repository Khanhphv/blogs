import { AuthContext } from "@/components/authorize";
import { Component, useContext } from "react";

export const withAuth = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const { isAdmin } = useContext(AuthContext);
    return <WrappedComponent isAdmin={isAdmin} {...props} />;
  };
};
