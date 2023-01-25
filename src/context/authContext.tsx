import React, { createContext, useState, useContext } from "react";

interface userProps {
  username: string;
  email: string;
  phone: string;
}

interface authContext {
  user: userProps | null;
  setUser: (user: userProps) => void;
}

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<authContext>({
  user: { username: "", email: "", phone: "" },
  setUser: () => {},
});

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<userProps | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
