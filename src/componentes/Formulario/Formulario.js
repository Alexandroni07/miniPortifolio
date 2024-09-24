import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import "./Formulario.css";

//Area do formulario inteira até o export
const Formulario = () => {
  //Tipos (Lista suspensa) para a escolha do projeto
  const tipo = [
    "Back-End Java",
    "Back-End Python",
    "Back-End C",
    "Front-End site",
  ];

  const aoSalvar = (evento) => {
    // evento.preventDefault(); -> evita que a pagina simplismente carrega no submite
    evento.preventDefault();
    console.log("Form foi submetido");
  };

  //preenchendo as áreas do form
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os seguintes cards para ideias de novos projetos </h2>
        <CampoTexto label="Nome" placeholder="Digite um nome para o projeto" />
        <CampoTexto
          label="Descrição"
          placeholder="Digite a descrição do projeto"
        />
        <CampoTexto
          label="Contato"
          placeholder="Digite seu telefone para contato"
        />
        <ListaSuspensa label="tipo" itens={tipo} />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
