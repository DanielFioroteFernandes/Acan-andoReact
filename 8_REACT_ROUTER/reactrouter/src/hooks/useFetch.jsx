import { useEffect, useState } from "react";

// 4 - custom hooks

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 - Refatorando o POST

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // -6 - Loading

  const [Loading, setLoading] = useState(false);

  // 7 - tratando erros.

  const [error, setError] = useState(null);

  // 8 - desafio excluir dados

  const [itemId, setItemId] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        Headers: {
          "Context-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod(method);
    } else if (method === "DELETE") {
      setConfig({
        method,
        Headers: {
          "Context-type": "application/json",
        },
      });
      setMethod(method);
      setItemId(data);
    }
  };

  // - recebendo dadso
  useEffect(() => {
    const fetchData = async () => {
      //6- Loading

      setLoading(true);

      try {
        const res = await fetch(url);

        const json = await res.json();

        setData(json);
      } catch (error) {
        console.log(error.message);
        setError("houve algum erro ao carregar os dados");
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  // - 5 refatorando POST

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();
        setCallFetch(json);
      } else if (method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`;

        const res = await fetch(deleteUrl, config);

        const json = await res.json();
        setCallFetch(json);
      }
    };

    httpRequest();
  }, [config, method, url]);
  return { data, httpConfig, Loading, error };
};
