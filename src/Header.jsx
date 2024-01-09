import "./Header.css";
import { useState, useEffect } from "react";

export default function Header() {
  const [quote, setQuote] = useState({ data: null, isLoading: true });
  const changeQuote = (data) => {
    console.log(data[0]);
    setQuote({ data: data, isLoading: false });
  };

  useEffect(() => {
    const fetchQuote = async () => {
      const res = await fetch(
        "https://api.api-ninjas.com/v1/quotes?category=life",
        {
          method: "GET",
          withCredentials: true,
          headers: {
            "X-Api-Key": "mtkGFfi/KuNJ+MPct/pd2A==4p5uApOkpGAgWl7S",
          },
        }
      );
      const data = await res.json();
      changeQuote(data);
    };
    fetchQuote();
  }, []);

  if (quote.isLoading) return <i>Loading ...</i>;

  return (
    <div className="Header">
      <h1>ToDo List</h1>
      <p>{quote.data[0].quote}</p>
    </div>
  );
}
