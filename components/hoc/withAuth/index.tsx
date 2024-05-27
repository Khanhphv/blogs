import { AuthContext } from "@/components/authorize";
import { Post } from "@/types/post";
import { useContext } from "react";

export const withAuth = (WrappedComponent: any) => {
  // eslint-disable-next-line react/display-name
  return (props: { post: { data: Post } }) => {
    console.log(props);
    const { isAdmin } = useContext(AuthContext);
    return (
      <WrappedComponent viewMode={!isAdmin} isAdmin={isAdmin} {...props} />
    );
  };
};
