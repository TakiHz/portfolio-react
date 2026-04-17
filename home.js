import React from 'https://esm.sh/react';

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img src="https://drive.google.com/uc?export=view&id=12tzbq_aahSc6SZcrMhUzQ_ToImk--l5N" alt="Foto de Mizael Ferreira" className="foto-perfil" />
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

export default Home;
