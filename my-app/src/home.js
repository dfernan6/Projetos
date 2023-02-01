import React from "react";

class Home extends React.Component{
    render(){
        return(
<div>
<header>
<link href="style.css" rel="stylesheet"/>
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
    <script language="javascript" src="script.js"></script>
</div>
        );
    }
}

export default Home;