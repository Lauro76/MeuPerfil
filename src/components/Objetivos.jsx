function Objetivos(props) {
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h1>{props.titulo}</h1>
      <h2>{props.objetivo1}</h2>
      <h2>{props.objetivo2}</h2>
      <h2>{props.objetivo3}</h2>
      {props.foto && (
        <img
          src={props.foto}
          alt="Objetivos"
          style={{ width: '200px', borderRadius: '10px' }}
        />
      )}
    </div>
  );
}

export default Objetivos;