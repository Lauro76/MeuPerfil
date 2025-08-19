import MyName from './components/MyName.jsx'
import Formacao from './components/Formacao.jsx';
import Hobbies from './components/Hobbies.jsx';
import Experiencias from './components/Experiencias.jsx';
import Projetos from './components/Projetos.jsx';
import Habilidades from './components/Habilidades.jsx';
import Idiomas from './components/Idiomas.jsx';
import Contatos from './components/Contatos.jsx';
import RedesSociais from './components/RedesSociais.jsx';
import Objetivos from './components/Objetivos.jsx';
import fotoPessoal from './assets/minhafoto.jpeg';
import fotoProgramar from './assets/programar.jpeg';
import fotoFutebol from './assets/futebol.jpeg';
import fotoExperiencia from './assets/experiencia.jpeg';
import fotoprojeto from './assets/projeto.jpg';
import fotoHabilidades from './assets/habilidades.jpeg';
import fotoIdiomas from './assets/idiomas.jpg';
import fotoContatos from './assets/contatos.png';
import fotoRedes from './assets/Redes.jpg';
import fotoObjetivos from './assets/Objetivos.jpg';
import './App.css'

function App() {
  

  return (
    
      <div>
     <MyName 
        nome="Lauro" 
         sobrenome="Cobo" 
         descricao="Sou um desenvolvedor em evolução, compartilhando minhas experiências." 
         foto={fotoPessoal} 
      />
     <Formacao
        titulo="Formação Acadêmica"
        instituicao="ETEC"
        descricao="Curso técnico em Desenvolvimento de Sistemas, aprendendo programação, lógica e boas práticas."
        foto={fotoProgramar} 
      />
      <Hobbies
        titulo="Hobby"
        subtitulo="Futebol"
        descricao="Adoro jogar e assistir Futebol."
        foto={fotoFutebol}
      />
      <Experiencias
        titulo="Minhas Experiências"
        experiencia1="Estágio em Desenvolvimento Web"
        experiencia2="Projeto Pessoal SPA React"
        experiencia3="Contribuição em GitHub"
        descricao="Desenvolvendo habilidades em programação e sustentabilidade."
        foto={fotoExperiencia}
     />
      <Projetos
        titulo="Projetos Desenvolvidos"
        nomeProjeto="MeuPerfil Vite-React"
        descricao="Sistema SPA mostrando meu perfil e experiências em React e Vite."
        foto={fotoprojeto}
      />
      <Habilidades
        titulo="Minhas Habilidades"
        habilidade1="JavaScript / React"
        habilidade2="HTML / CSS / Tailwind"
        habilidade3="Node.js / Express"
        foto={fotoHabilidades}
      />
      <Idiomas
        titulo="Idiomas"
        idioma1="Português - Nativo"
        idioma2="Inglês - Intermediário"
        idioma3="Espanhol - Básico"
        foto={fotoIdiomas}
     /> 
      <Contatos
        titulo="Meus Contatos"
        contato1="Email: lauro@example.com"
        contato2="Telefone: +55 11 99999-9999"
        contato3="LinkedIn: linkedin.com/in/lauro"
        foto={fotoContatos}
      />
     <RedesSociais
        titulo="Minhas Redes Sociais"
        rede1="LinkedIn: linkedin.com/in/lauro"
        rede2="GitHub: github.com/lauro"
        rede3="Instagram: instagram.com/lauro"
        foto={fotoRedes}
     />
     <Objetivos
       titulo="Meus Objetivos"
       objetivo1="Concluir minha formação em Desenvolvimento de Sistemas"
       objetivo2="Trabalhar com projetos de impacto positivo"
       objetivo3="Evoluir constantemente no autoconhecimento e na carreira"
       foto={fotoObjetivos}
     />
      
      </div>
      
    
  )
}

export default App
