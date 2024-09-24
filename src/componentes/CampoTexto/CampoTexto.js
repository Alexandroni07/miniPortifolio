import "./CampoTexto.css";

//Áreas de texto (input) dentro do form, já vinculada diretamente com placeholder
const CampoTexto = (props) => {
  const placeholderModificada = `${props.placeholder}...`;

  //digitação no console em tempo real
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  //required={props.obrigatorio} -> Torna o campo obrigatorio
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default CampoTexto;
