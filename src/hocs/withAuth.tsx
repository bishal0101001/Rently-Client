import React, { useEffect } from "react";
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

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/auth/login", undefined, { shallow: true });
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withAuth;
