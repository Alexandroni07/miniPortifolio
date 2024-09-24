import "./ListaSuspensa.css";

//Card de escolha de tipo
const ListaSuspensa = (props) => {
  return (
    <div className="Lista-suspensa">
      <label>{props.label}</label>
      <select required={props.obrigatorio}>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
