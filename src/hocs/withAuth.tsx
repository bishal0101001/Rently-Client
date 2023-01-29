import React from "react";
import { useRouter } from "next/router";
import useAuth from "@hooks/useAuth";

interface Props {
  isAuthenticated: boolean;
}

const withAuth = <T extends object>(
  WrappedComponent: React.ComponentType<T>
) => {
  const HOC = (props: T & Props) => {
    console.log(props, "props");
    const router = useRouter();
    const { user, isAuthenticated } = useAuth();

    console.log(user, "/", isAuthenticated);

    if (router.isFallback) {
      return <div>Loading...</div>;
    }
    if (!isAuthenticated) {
      router.push("/auth/login");
    }

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withAuth;
