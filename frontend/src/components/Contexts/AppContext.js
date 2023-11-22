import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext([{}]);

export const AppProvider = ({ children }) => {
  const [allDogs, setAllDogs] = useState([]);
  const [myCart, addToCart] = useState([{}]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/v1/dogs");
      return res;
    };
    getData()
      .then((res) => setAllDogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <AppContext.Provider
      value={{ allDogs, myCart, addToCart, total, setTotal }}
    >
      {children}
    </AppContext.Provider>
  );
};
