import { useState, useEffect } from "react";

const useCustomHook = () => {
  const [jokes, setJokes] = useState("");
  useEffect(() => {
    const fetchJokes = async () => {
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          setJokes(data);
        });
    };
    fetchJokes();
  }, []);
  return jokes;
};

export default useCustomHook;
