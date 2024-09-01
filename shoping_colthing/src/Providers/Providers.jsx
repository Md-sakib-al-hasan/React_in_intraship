import { createContext, useState } from "react";

export const Allprovers = createContext(null);

const Providers = ({ children }) => {
  const [contromenu, setContromenu] = useState(false);
  const [lgscreenscroll, setSlgscreenscroll] = useState(false);
  const value = {
    contromenu,
    setContromenu,
    lgscreenscroll,
    setSlgscreenscroll,
  };

  return <Allprovers.Provider value={value}>{children}</Allprovers.Provider>;
};

export default Providers;
