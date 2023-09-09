import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ApiContext = createContext();

const baseURL = process.env.REACT_APP_BASE_URL;
const API = `${baseURL}/posts`;

export function ApiProvider({ children }) {
  const [getData, setData] = useState([]);

  const getProductData = async (url) => {
    try {
      const res = await axios.get(url);
      setData(res.data?.posts);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    getProductData(API);
  }, []);

  return (
    <ApiContext.Provider value={{ data: getData }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}
