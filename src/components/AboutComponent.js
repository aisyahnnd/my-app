import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context";

function AboutComponent() {
  const [count, setCount] = useState(0);
  const { someValue, secondValue, pokemonData, fetchData } =
    useContext(MyContext);

  useEffect(() => {
    setCount(100);
    fetchData();
  }, []);

  console.log(pokemonData);

  return (
    <div>
      <p>Count: {count}</p>

      {/* Tombol untuk meningkatkan nilai count */}
      <button
        style={{ marginRight: "8px" }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      {/* Tombol untuk mengurangi nilai count */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <p>
        Nilai dari Context: {someValue} & {secondValue}
      </p>
      <h4>Name: {pokemonData?.name}</h4>
      <h4>Weight: {pokemonData?.weight}</h4>
    </div>
  );
}

export default AboutComponent;
