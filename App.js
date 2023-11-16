import logo from './logo.svg';
import './App.css';
import Component from './Component';
import { Formulario } from './Formulario';
import { panel_control } from './panel_control';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [user, setUser] = useState ([])

    return (
    <div className="App">

      <nav className="App-nav">

        <url class="nav-links">
            <a class="btn" href="#"><button>Inicio</button></a>
            <a class="btn" href="#"><button class="bi bi-bag-check"> Catálogo</button></a>
            <a class="btn" href="#"><button class="bi bi-info-square-fill"> Quienes somos</button></a>
            <a class="btn" href="#"><button class="bi bi-telephone-fill"> Contactos</button></a>
            <a class="btn" href="#"><button class="bi bi-Login-fill"> login </button></a>
        
        </url>
        
      </nav>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Preparativos de la plataforma
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        />
        
      </header>

      <body className="App-body">

        Cuerpo de pagina
        
        {
     !user.length > 0
      ?<Formulario setUser={setUser} />
      : <panel_control /> 
    }
      </body>

      <footer className="App-footer">

        Pie de pagina

      </footer>
    </div>

  );
}



export default App;


