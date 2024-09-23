import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const times = ["Back-End Java", "Front-End"];

  return (
    <section className="formulario">
      <form>
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
        <ListaSuspensa label="time" itens={times} />
      </form>
    </section>
  );
};

export default Formulario;
