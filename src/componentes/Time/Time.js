import Projeto from "../Projeto/Projeto";
import "./Time.css";

//componente dos conjuntos dos projetos
const Time = (props) => {
  //estilizando com const em vez de inline. Evitar usar num em nome
  const sectionCss = { backgroundColor: props.corSecundaria };

  const h3Css = { borderColor: props.corPrimaria };

  return (
    props.projetos.length > 0 && (
      <section className="time" style={sectionCss}>
        <h3 style={h3Css}>{props.nome}</h3>
        <div className="projects">
          {props.projetos.map((projeto) => (
            <Projeto
              corDeFundo={props.corPrimaria}
              key={projeto.nome}
              nome={projeto.nome}
              descricao={projeto.descricao}
              imagem={projeto.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
