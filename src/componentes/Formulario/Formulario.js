import { useState } from "react";
import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import "./Formulario.css";

//Area do formulario inteira até o export
const Formulario = (props) => {
  //Tipos (Lista suspensa) para a escolha do projeto
  const areaAtuacao = [
    "Back-End Java",
    "Back-End Python",
    "Back-End C",
    "Front-End site",
  ];

  const time = ["Back-End Java", "Front-End", "Projetos Futuros"];

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [contato, setContato] = useState("");
  const [imagem, setImagem] = useState("");
  const [tipo, setTipo] = useState("");

  const aoSalvar = (evento) => {
    // evento.preventDefault(); -> evita que a pagina simplismente carrega no submite
    evento.preventDefault();
    props.aoProjetoCadastrado({
      nome,
      descricao,
      contato,
      imagem,
      tipo,
    });
  };

  //preenchendo as áreas do form
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os seguintes cards para ideias de novos projetos </h2>

        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite um nome para o projeto"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Descrição"
          placeholder="Digite a descrição do projeto"
          valor={descricao}
          aoAlterado={(valor) => setDescricao(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Contato"
          placeholder="Digite seu telefone para contato"
          valor={contato}
          aoAlterado={(valor) => setContato(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="URL da imagem (opcional)"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />

        <ListaSuspensa
          obrigatorio={true}
          label="tipo"
          itens={areaAtuacao}
          valor={tipo}
          aoAlterado={(valor) => setTipo(valor)}
        />

        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
