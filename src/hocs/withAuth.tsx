import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectUser } from "src/slices/userSlice";

interface Props {
  isAuthenticated: boolean;
}

const withAuth = <T extends object>(
  WrappedComponent: React.ComponentType<T>
) => {
  const HOC = (props: T & Props) => {
    const router = useRouter();

    const { isAuthenticated } = useSelector(selectUser);

    if (!isAuthenticated) {
      router.push("/auth/login");
    }

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withAuth;
