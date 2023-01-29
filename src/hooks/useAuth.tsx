import { useContext } from "react";
import { AuthContext } from "src/context/authContext";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const isAuthenticated = user ? true : false;

  const register = (
    username: string,
    email: string,
    phone: string,
    password: string
  ) => {
    try {
      // Backend call for register
      login(username, email, phone);
    } catch (error) {}
  };

  const login = (username: string, email: string, phone: string) => {
    try {
      // Backend call
      setUser({
        username,
        email,
        phone,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { user, login, register, isAuthenticated };
};

export default useAuth;
