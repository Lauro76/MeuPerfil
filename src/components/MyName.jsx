function MyName (props) {

     return(

          <div style={{ padding: '20px', color: 'white' }}>
             <h1>{props.nome}</h1>
             <h2>{props.sobrenome}</h2>
             <p>{props.descricao}</p>
             <img src={props.foto} alt="Foto pessoal" style={{ width: '200px', borderRadius: '10px' }} />
          </div>
          
     )
}

export default MyName;