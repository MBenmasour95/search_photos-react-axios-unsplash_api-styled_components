import { createContext, useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://api.unsplash.com/photos/";
const SEARCH_URL = "https://api.unsplash.com/search/photos/";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const fetchPhotos = async () => {
    setLoading(true);

    if (page > 1) {
      setLoading(false);
    }

    let url;
    if (query) {
      url = `${SEARCH_URL}?client_id=${process.env.REACT_APP_ACCESS_KEY}&page=${page}&query=${query}`;
    } else {
      url = `${BASE_URL}?client_id=${process.env.REACT_APP_ACCESS_KEY}&page=${page}`;
    }

    try {
      const response = await axios(url);
      const data = response.data;

      setPhotos((oldPhotos) => {
        if (!query && page === 1) {
          return data;
        } else if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldPhotos, ...data.results];
        } else {
          return [...oldPhotos, ...data];
        }
      });

      if (query && data.results.length === 0) {
        setError("No Photos matched your search!!!");
      } else {
        setError("");
      }

      setLoading(false);
      setHasMore(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (hasMore) {
      setTimeout(() => setPage((oldPage) => oldPage + 1), 500);
    }
  }, [hasMore]);

  const event = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 20
    ) {
      setHasMore(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", event);
    return () => window.removeEventListener("scroll", event);
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        photos,
        query,
        setQuery,
        error,
        setPage,
        hasMore,
        fetchPhotos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
