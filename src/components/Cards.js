import { useState, useEffect } from "react";

import "./card.css";

export default function Card(props) {
  const [data, setData] = useState({});
  const [url, setUrl] = useState("");
  useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${Math.floor(
        Math.random() * (500 - 1 + 1) + 1
      )}`
    )
      .then((response) => response.json())
      .then((res) => {
        setData(res.abilities[0].ability);
        setUrl(res.sprites.other.dream_world.front_default);
      });
  }, []);
  return (
    <>
      {data && (
        <div className="card">
          <img className="img" src={url} alt="pokemon" />

          <h2>{data.name}</h2>
        </div>
      )}
    </>
  );
}
