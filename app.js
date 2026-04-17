import React from 'https://esm.sh/react';
import ReactDOM from 'https://esm.sh/react-dom/client';
import Header from './Header.js';
import Home from './Home.js';
import Projetos from './Projetos.js';
import Contato from './Contato.js';

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
