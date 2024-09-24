import Projeto from "../Projeto/Projeto";
import "./Time.css";

//componente dos conjuntos dos projetos
const Time = (props) => {
  //estilizando com const em vez de inline. Evitar usar num em nome
  const sectionCss = { backgroundColor: props.corSecundaria };

  const h3Css = { borderColor: props.corPrimaria };

  return (
    <section className="time" style={sectionCss}>
      <h3 style={h3Css}>{props.nome}</h3>
      <Projeto />
    </section>
  );
};

export default Time;
