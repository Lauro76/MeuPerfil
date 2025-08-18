function Contatos(props) {
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h1>{props.titulo}</h1>
      <h2>{props.contato1}</h2>
      <h2>{props.contato2}</h2>
      <h2>{props.contato3}</h2>
      {props.foto && (
        <img
          src={props.foto}
          alt="Contatos"
          style={{ width: '200px', borderRadius: '10px' }}
        />
      )}
    </div>
  );
}

export default Contatos;

  