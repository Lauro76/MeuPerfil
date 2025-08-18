function Experiencias(props) {
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h1>{props.titulo}</h1>
      <h2>{props.local}</h2>
      <p>{props.descricao}</p>
      {props.foto && (
        <img
          src={props.foto}
          alt="Experiência"
          style={{ width: '200px', borderRadius: '10px' }}
        />
      )}
    </div>
  );
}

export default Experiencias;