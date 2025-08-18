function Habilidades(props) {
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h1>{props.titulo}</h1>
      <h2>{props.habilidade1}</h2>
      <h2>{props.habilidade2}</h2>
      <h2>{props.habilidade3}</h2>
      <h2>{props.habilidade4}</h2>
      <h2>{props.habilidade5}</h2>
      {props.foto && (
        <img
          src={props.foto}
          alt="Habilidades"
          style={{ width: '200px', borderRadius: '10px' }}
        />
      )}
    </div>
  );
}

export default Habilidades;