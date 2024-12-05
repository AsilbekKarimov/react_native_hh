import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
          "x-rapidapi-key": "797a8d4132msh803738d6e2dfb26p13cb51jsn3f290875839d",
          "x-rapidapi-host": "jsearch.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      setData(response.data.data || []); 
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  const refetch = () => {
    fetchData(); 
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
