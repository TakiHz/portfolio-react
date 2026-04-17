import React from 'https://esm.sh/react';

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

export default Projetos;
