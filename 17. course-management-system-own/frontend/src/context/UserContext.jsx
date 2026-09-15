import { createContext, useState } from "react";

export let userContext = createContext();

const UserContext = ({ children }) => {
  let [user, setUser] = useState(null);

  let login = (data) => {
    setUser(data);
  };

  let logout = () => {
    setUser(null);
  };

  return (
    <userContext.Provider value={{ user, login, logout }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContext;
