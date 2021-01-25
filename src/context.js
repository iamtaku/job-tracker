import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import axios from "axios";

const url = "http://localhost:3000/api/v1/jobs";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(url);
      console.log(response);
      if (response.status === 200) {
        setData(response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <AppContext.Provider value={{ setLoading, data, loading }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
