import { useState, useEffect } from "react";

const useFetchData = (url, options, dependencies = []) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const newData = await response.json();
        setData((prevData) => [...prevData, ...newData]);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies); // Dépendances optionnelles pour lesquelles l'effet doit être réexécuté

  return { data, loading };
};

export default useFetchData;
