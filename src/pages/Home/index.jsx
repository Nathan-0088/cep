import Api from "../../services/api";
import "./home.css";

import { useState } from "react";

export default function Home() {
  const [inp, setInp] = useState("");
  const [cep, setCep] = useState(null);

  async function procura(event) {
    event.preventDefault();

    const response = await Api.get(`${inp}/json/`);
    console.log(response.data);
    setCep(response.data);

    setInp("");
  }

  return (
    <div className="homeContainer">
      <h1>.CEP</h1>
      <form onSubmit={procura}>
        <input
          type="text"
          placeholder="Digite um cep para fazer a confencia..."
          value={inp}
          onChange={(event) => setInp(event.target.value)}
        />
        <input type="submit" value="Conferir" />
      </form>
      {cep ? (
        <div className="results">
          <h1>Cidade: {cep.localidade}</h1>
          <h2>
            Estado: {cep.estado}/{cep.uf}
          </h2>
          <h3>ddd: {cep.ddd}</h3>
        </div>
      ) : (
        <h1>Digite algo...</h1>
      )}
    </div>
  );
}
