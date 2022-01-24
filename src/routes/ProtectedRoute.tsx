import { FC } from "react";
import { Route } from "react-router-dom";
import { Loader } from "../components/Loader";
import { useStore } from "../hooks/useStore";
// import { hasToken } from "../config/accessToken";

interface ProtectedRouteProps {
  component: any;
  path: string;
  props?: any;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  component: Component,
  path,
  props,
}) => {
  // const { user, loading } = useUser();
  const { logoutLoading } = useStore();

  // if (loading) return <Loader />;

  if (logoutLoading) return <Loader />;
  // return hasToken() ? (
  return (
    <Route exact path={path}>
      <Component {...props} />
    </Route>
  );
  // ) : (
  //   <Redirect to={{ pathname: "/login" }} />
  // );
};
