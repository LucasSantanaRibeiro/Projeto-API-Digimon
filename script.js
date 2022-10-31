async function digiAleatorioPorClasse() {
    var nivel = document.getElementById("nivelDigimon").value
    var API = `https://digimon-api.herokuapp.com/api/digimon/level/${nivel}`


    var response = await fetch(API)
    var BodyJson = await response.json()
    var numeroRandom = Math.floor(Math.random() * BodyJson.length)
    var digimonAleatorio = BodyJson[numeroRandom]

    var resultado = document.getElementById("resultado")

    resultado.innerHTML = "";

    var nome = document.createElement("p")
    nome.innerText = digimonAleatorio.name
    resultado.append(nome)
    nome.classList.add("nomeElevel")

    var imagem = digimonAleatorio.img
    var img = document.createElement("img")
    img.src = imagem
    resultado.append(img)
    img.classList.add("imagemDigimon")
}

async function digiAleatorio() {
    var API = `https://digimon-api.herokuapp.com/api/digimon`


    var response = await fetch(API)
    var BodyJson = await response.json()
    var numeroRandom = Math.floor(Math.random() * BodyJson.length)
    var digimonAleatorio = BodyJson[numeroRandom]

    var resultado = document.getElementById("resultado")

    resultado.innerHTML = "";

    var nome = document.createElement("p")
    nome.innerText = digimonAleatorio.name
    resultado.append(nome)
    nome.classList.add("nomeElevel")

    var imagem = digimonAleatorio.img
    var img = document.createElement("img")
    img.src = imagem
    resultado.append(img)
    img.classList.add("imagemDigimon")

    var level = document.createElement("p")
    level.innerText = digimonAleatorio.level
    resultado.append(level)
    level.classList.add("nomeElevel")
}


