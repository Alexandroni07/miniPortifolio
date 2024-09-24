import "./Botao.css";

//Botão de submite do form
const Botao = (props) => {
  return <button className="botao">{props.children}</button>;
};

export default Botao;
