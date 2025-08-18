function RedesSociais(props) {
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h1>{props.titulo}</h1>
      <h2>{props.rede1}</h2>
      <h2>{props.rede2}</h2>
      <h2>{props.rede3}</h2>
      {props.foto && (
        <img
          src={props.foto}
          alt="Redes Sociais"
          style={{ width: '200px', borderRadius: '10px' }}
        />
      )}
    </div>
  );
}

export default RedesSociais;