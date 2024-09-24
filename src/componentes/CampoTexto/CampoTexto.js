import "./CampoTexto.css";

//Áreas de texto (input) dentro do form, já vinculada diretamente com placeholder
const CampoTexto = (props) => {
  const placeholderModificada = `${props.placeholder}...`;
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input placeholder={placeholderModificada} />
    </div>
  );
};

export default CampoTexto;
