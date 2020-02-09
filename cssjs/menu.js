// JavaScript Document

var dropdown;
var degrade;
var minHeight;
var dropdown = false;
if (degrade == null) {degrade = document.getElementById('conteudo').style.background;}
if (minHeight == null) {minHeight = document.getElementById('conteudo').style.minHeight;}

function myFunction(){
"use strict";
if (dropdown === true) {dropdown = false;} else {dropdown = true;}
down(); //Troca as variáveis e executa a função down
}

function down(){ //Define se o menu mobile vai aparecer ou não
"use strict";
if (dropdown === true){
	document.getElementById('conteudo').style.minHeight = '600px';
	document.getElementById('conteudo').style.background = '-webkit-linear-gradient(top, #000, transparent 600px)';
	document.getElementById('conteudo').style.background = '-o-linear-gradient(top, #000, transparent 600px)';
	document.getElementById('conteudo').style.background = '-moz-linear-gradient(top, #000, transparent 600px)';
	document.getElementById('conteudo').style.background = '-ms-linear-gradient(top, #000, transparent 600px)';
	document.getElementById('conteudo').style.background = 'linear-gradient(top, #000, transparent 600px)';
	document.getElementById('menu').style.display = 'block';
	document.getElementById('botao').style.display = 'block';
	document.getElementById('botao').style.transform = 'rotate(180deg)';
	}
	else
	{
	document.getElementById('conteudo').style.minHeight = '600px';
	document.getElementById('conteudo').style.background = 'none';
	document.getElementById('menu').style.display = 'none';
	document.getElementById('botao').style.display = 'block';
	document.getElementById('botao').style.transform = 'rotate(0deg)';
	}
}

resize();
window.onresize = resize; //Chama a função resize quando mudar o tamanho da janela

function resize(){
"use strict";
if (window.innerWidth > 700){ //Reajusta ao padrão normal da página
	document.getElementById('conteudo').style.minHeight = minHeight;
	document.getElementById('conteudo').style.background = degrade;
	document.getElementById('menu').style.display = 'block';
	document.getElementById('botao').style.display = 'none';
	document.getElementById('botao').style.transform = 'rotate(0deg)';
	dropdown = false;
	}
	else
	{down();}
}