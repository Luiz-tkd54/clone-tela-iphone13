// contante/ variavel de botao para cor da seleçao de troca de cor e 
//const image para trocar de image,  

const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn)=>{
    btn.addEventListener ("click", (e)=>{
        console.log(e);

        buttons.forEach((btn)=>
            btn.querySelector(".color").classList.remove("selected"));


                    // e: Representa o objeto de evento.

            // target: Esta propriedade do objeto de evento fornece o elemento que foi o alvo do
            //  evento, ou seja, o elemento que disparou o evento.
            const button = e.target;
            // pega o id do botao
            const id = button.getAttribute("id");
            //o botao pega a cor do botao do id selecionado  
            button.querySelector(".color").classList.add("selected");


            // toggle("changing"): O método toggle é usado para alternar a classe especificada (neste caso, "changing").
            //  Se a classe "changing" já estiver presente no elemento, ela será removida. Caso contrário, ela será adicionada. 
            image.classList.toggle("changing");
            // . O valor de ${id} será substituído pela variável id.
            image.setAttribute("src",`img/iphone_${id}.jpg`);

            // setTimeout() adiciona um atraso de execução de código.
            // Após um intervalo de 200ms, a classe changing é removida da imagem, completando a animação.
            setTimeout(()=>{
                image.classList.toggle("changing");      
            },200);

    });
}); 



