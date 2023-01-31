import React from 'react';
import './style.css'; 
//import './script.js';

function App() {
      return  ( 
        <main>
        <header>
        <h1 id="title">Paleta de Cores</h1>
        </header>
        <section id="color-palette">  
        <ul class="colors-ul">    
        </ul>
        </section>
        <button id="clear-board" >Limpar</button>
        <aside id="pixel-board">
        </aside>
        <footer>  
          &copy <b><i>Danilo Fernandes</i></b>
        </footer>
        </main>
      );
    } 

export default App;
