import React from "react";
//import Script from "./script";

class Home extends React.Component{
    render(){
        return(
<body>
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
	&copy<b><i>Danilo Fernandes</i></b>
</footer>
</body>
        );
    }
}

export default Home;