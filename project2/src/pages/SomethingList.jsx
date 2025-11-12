import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import * as itemsService from "../services/itemsService";
import Spinner from "../components/Spinner";
import ErrorBox from "../components/ErrorBox";
import Card from "../components/Card";
import "./SomethingList.css";

export default function SomethingList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [inputValue, setInputValue] = useState(query);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    itemsService
      .getAll(query)
      .then(setItems)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query]);

  const handleChange = (e) => setInputValue(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams(inputValue ? { q: inputValue } : {});
    setInputValue("");
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorBox message={error} />;

  return (
    <section className="something-list-section">
      <h1>Characters</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search characters..."
          value={inputValue}
          onChange={handleChange}
          className="something-list-input"
        />
        <button type="submit" className="something-list-button">
          Search
        </button>
      </form>

      <div className="something-list-cards">
        {items.length > 0 ? (
          items.map((item) => <Card key={item.id} item={item} />)
        ) : (
          <p>No characters found</p>
        )}
      </div>
    </section>
  );
}