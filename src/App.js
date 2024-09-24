import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Time from "./componentes/Time/Time";

//App principal
function App() {
  const times = [
    {
      nome: "BackEnd",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "FrontEnd",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Ideias de Projetos",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
  ];

  const [projetos, setProjetos] = useState([]);

  const aoNovoProjetoAdicionado = (projeto) => {
    console.log(projeto);
    setProjetos([...projetos, projeto]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoProjetoCadastrado={(projeto) => aoNovoProjetoAdicionado(projeto)}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
        />
      ))}
    </div>
  );
}

export default App;
