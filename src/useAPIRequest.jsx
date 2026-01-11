import { useState, useEffect } from "react";

const useAPIRequestCarousel = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setErrorMessage(null);
      try {
        //Initiate fetch request
        const response = await fetch(url);
        //Check if fetch request is ok. If not then return a error message.
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP Error: Status ${response.status}`);
        }
        //Convert the fetch data to JSON format.
        const result = await response.json();
        //Assign the fetch data to state.
        setData(result);
      } catch (error) {
        //This block will be execute if the fetch request failed.
        setErrorMessage(error);
        setLoading(false);
      } finally {
        //This block will be executed until the fetch request complete.
        setLoading(false);
      }
    };

    fetchData(url);
  }, [url]);

  return { data, loading, errorMessage };
};

export default useAPIRequestCarousel;
