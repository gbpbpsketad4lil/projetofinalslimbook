const botao = document.querySelector("button");
const iconeBotao = document.querySelector("button img");




console.log(botao,iconeBotao);




botao.addEventListener("mouseover",()=>{
   iconeBotao.classList.add("show");
   iconeBotao.classList.remove("hidden");
})

botao.addEventListener("mouseleave",()=>{
    iconeBotao.classList.add("hidden");
    iconeBotao.classList.remove("show");
 })
