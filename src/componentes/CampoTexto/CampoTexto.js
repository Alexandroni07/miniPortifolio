import "./CampoTexto.css";

//Áreas de texto (input) dentro do form, já vinculada diretamente com placeholder
const CampoTexto = (props) => {
  const placeholderModificada = `${props.placeholder}...`;

  //required={props.obrigatorio} -> Torna o campo obrigatorio
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input required={props.obrigatorio} placeholder={placeholderModificada} />
    </div>
  );
};

export default CampoTexto;
