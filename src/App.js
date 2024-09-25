import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Time from "./componentes/Time/Time";
import Footer from "./componentes/Footer/Footer";

//App principal
function App() {
  const times = [
    {
      nome: "Back-End Java",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Back-End Python",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Back-End C",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Front-End Site",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
  ];

  const [projetos, setProjetos] = useState([]);

  const aoNovoProjetoAdicionado = (projeto) => {
    debugger;
    setProjetos([...projetos, projeto]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoProjetoCadastrado={(projeto) => aoNovoProjetoAdicionado(projeto)}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          projetos={projetos.filter((projeto) => projeto.time === time.nome)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
