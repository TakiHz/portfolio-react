import React from 'https://esm.sh/react';

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

export default Header;
