function Idiomas(props) {
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h1>{props.titulo}</h1>
      <h2>{props.idioma1}</h2>
      <h2>{props.idioma2}</h2>
      <h2>{props.idioma3}</h2>
      {props.foto && (
        <img
          src={props.foto}
          alt="Idiomas"
          style={{ width: '200px', borderRadius: '10px' }}
        />
      )}
    </div>
  );
}

export default Idiomas;