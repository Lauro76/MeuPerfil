function Formacao(props) {
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h1>{props.titulo}</h1>
      <h2>{props.instituicao}</h2>
      <p>{props.descricao}</p>
      {props.foto && (
        <img
          src={props.foto}
          alt="Formação"
          style={{ width: '200px', borderRadius: '10px' }}
        />
      )}
    </div>
  );
}

export default Formacao;