import {addImageBg, chooseDesc} from "./apiDog.js";

//Pegando os elementos HTML
const imagem = document.querySelector('.imagem');
const btProximo = document.getElementById("proximo");
const btAdotar = document.getElementById("adotar");
const nome = document.querySelector('.nome');
const historia = document.querySelector('.historia');

//Adicionando o evento click para o button proximo
btProximo.addEventListener('click', async (ev) =>
{
    ev.preventDefault();
    if(btAdotar.innerHTML != "Adotar")
    {
        btAdotar.classList.toggle('adotado');
        btAdotar.innerHTML = "Adotar"
    }
    addImageBg(imagem);
    chooseDesc(nome, historia);
});

//Adicionando evento para o botao de adocao
btAdotar.addEventListener('click', (ev) =>
{
    btAdotar.classList.toggle('adotado');

    if(btAdotar.innerHTML == "Adotar")
    {
        btAdotar.innerHTML = "Pet Adotado <3";
    }else
    {
        btAdotar.innerHTML = "Adotar";
    }
    

});

window.onload = () =>
{
    addImageBg(imagem);
    chooseDesc(nome, historia);
}