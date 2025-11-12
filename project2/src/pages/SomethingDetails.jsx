import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as itemsService from "../services/itemsService";
import Spinner from "../components/Spinner";
import ErrorBox from "../components/ErrorBox";

export default function SomethingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    itemsService
      .getById(id)
      .then(setItem)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <ErrorBox message={error} />;
  if (!item) return <ErrorBox message="Character not found" />;

  return (
    <section style={{ textAlign: "center" }}>
      <button onClick={() => navigate(-1)}>⬅ Back</button>
      <h1>{item.name}</h1>
      <img
        src={item.image}
        alt={item.name}
        style={{ borderRadius: "10px", margin: "20px" }}
      />
      <p><b>Status:</b> {item.status}</p>
      <p><b>Species:</b> {item.species}</p>
      <p><b>Gender:</b> {item.gender}</p>
      <p><b>Origin:</b> {item.origin.name}</p>
      <p><b>Location:</b> {item.location.name}</p>
      <p><b>Episode Count:</b> {item.episode.length}</p>
    </section>
  );
}
