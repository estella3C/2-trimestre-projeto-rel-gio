const botoes - document.querySelectorAll(".botoes");
.log(botoes)
for(let i=0; i< botoes.lenght; i++){

botoes[i].onclick = function(){
     botoes[i].claslist.add("ativo");
}
}