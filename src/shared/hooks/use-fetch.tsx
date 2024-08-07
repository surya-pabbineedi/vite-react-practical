import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>(true);
  const [abortController, setAbortController] = useState<AbortController>();

  useEffect(() => {
    let controller = new AbortController();
    const signal = controller.signal;
    setAbortController(controller);

    const fetchData = async () => {
      try {
        const res = await fetch(url, { signal });
        const data = await res.json();
        setResponse(data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { response, error, loading, abortController };
};

export default useFetch;
