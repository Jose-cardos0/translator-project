import { createContext, useState } from "react";

export const MyContext = createContext();

export function MyProvider({ children }) {
  const [text, setText] = useState("");
  return (
    <MyContext.Provider value={{ text, setText }}>
      {children}
    </MyContext.Provider>
  );
}
