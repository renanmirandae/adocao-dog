const descriptionDog = async () =>
{
    const json = (await fetch("../animais.json")).json();
    return await json;

}

export const chooseDesc = async (divNome, divHistoria) =>
{
    const random = Math.round(Math.random() * (19 - 1) + 1);
    let descricao = await descriptionDog();
    descricao = descricao[random]
    divNome.innerHTML = descricao.nome;
    divHistoria.innerHTML = descricao.historia;
}

// Função que conecta com a API e retorna o JSON com o link da imagem
const dogRandom = async () =>
{
    const imagem = (await fetch("https://dog.ceo/api/breeds/image/random")).json();
    return await imagem;
}

/*Função que pega o link da imagem da API e define como background da div
Recebe como parametro a div a qual deve ser adicionado a imagem como bg*/
export let addImageBg = async (div) =>
{
    const imagemJson = await dogRandom();
    return div.style.backgroundImage = `url("${imagemJson.message}")`;
}

/*A Api de imagens não fornece o nome dos animais nem uma descrição sobre eles
por esse motivo criei um json que irá fornecer essas informações de forma aleatoria tambem*/
