import { useState, useEffect } from "react";

const MAX_JSON_SIZE = 300_000; // 300 KB iOS safe limit

const useAPIRequestCarousel = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setErrorMessage(null);

      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP Error: Status ${response.status}`);
        }

        const size = response.headers.get("content-length");

        if (size && Number(size) > MAX_JSON_SIZE) {
          controller.abort(); // stop download
          throw new Error("JSON too large for iOS");
        }

        const text = await response.text();

        if (text.length > MAX_JSON_SIZE) {
          controller.abort();
          throw new Error("JSON too large for iOS");
        }

        const result = JSON.parse(text);
        setData(result);

      } catch (error) {
        if (error.name !== "AbortError") {
          setErrorMessage(error.message || "Failed to load data");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, loading, errorMessage };
};

export default useAPIRequestCarousel;
