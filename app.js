import React from 'https://esm.sh/react';
import ReactDOM from 'https://esm.sh/react-dom/client';

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <span className="iniciais">MF</span>
          <span className="nome">Mizael Ferreira</span>
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img src="https://i.ibb.co/5PMxkNG/1775914403198.png" alt="Foto de Mizael Ferreira" className="foto-perfil" />
        <p className="saudacao">Olá, eu sou</p>
        <h1>Mizael Ferreira</h1>
        <p className="descricao">
          Estudante de Tecnologia em Sistemas para Internet (EAD-UAPI) no polo de Nazaré do Piauí - PI.
        </p>
        <div className="botoes">
          <a href="#projetos" className="btn btn-primario">Ver Meus Projetos</a>
          <a href="#contato" className="btn btn-secundario">Entrar em Contato</a>
        </div>
      </div>
    </section>
  );
}

function Projetos() {
  const projetos = [
    {
      id: 1,
      titulo: 'Atividade 1 JavaScript',
      descricao: 'Primeira atividade prática: manipulação de DOM, eventos e lógica de programação.',
      repositorio: 'https://github.com/TakiHz/Atividade-1-JavaScript'
    },
    {
      id: 2,
      titulo: 'Atividade 2 JavaScript',
      descricao: 'Segunda atividade: funções assíncronas, consumo de API e tratamento de dados.',
      repositorio: 'https://github.com/TakiHz/Atividade-2-JavaScript'
    }
  ];

  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>
      <p className="subtitulo">Atividades desenvolvidas na disciplina</p>
      <div className="projetos-container">
        {projetos.map(projeto => (
          <div className="card" key={projeto.id}>
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <div className="links-projeto">
              <a href={projeto.repositorio} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> Ver no GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato">
      <h2>Contato</h2>
      <div className="contato-cards">
        <a href="https://www.instagram.com/mizael.ferreira_" target="_blank" rel="noopener noreferrer" className="contato-card">
          <i className="fab fa-instagram"></i> <span>Instagram</span>
        </a>
        <a href="https://wa.me/558994712994" target="_blank" rel="noopener noreferrer" className="contato-card">
          <i className="fab fa-whatsapp"></i> <span>WhatsApp</span>
        </a>
        <a href="mailto:talix080@gmail.com" className="contato-card">
          <i className="far fa-envelope"></i> <span>E-mail</span>
        </a>
      </div>
    </section>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <Projetos />
        <Contato />
      </main>
      <footer>
        <p>&copy; 2026 Mizael Ferreira</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
