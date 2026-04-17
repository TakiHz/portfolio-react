import React from 'https://esm.sh/react';

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

export default Contato;
