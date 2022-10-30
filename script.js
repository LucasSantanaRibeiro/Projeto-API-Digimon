async function confirmar() {
    var nivel = document.getElementById("nivelDigimon").value
    var API = `https://digimon-api.herokuapp.com/api/digimon/level/${nivel}`


    var response = await fetch(API)
    var BodyJson = await response.json()
    var numeroRandom = Math.floor(Math.random() * BodyJson.length)
    var digimonAleatorio = BodyJson[numeroRandom]

    var resultado = document.getElementById("resultado")

    resultado.innerHTML = "";

    var p = document.createElement("p")
    p.innerText = digimonAleatorio.name
    resultado.append(p)

    var teste = digimonAleatorio.img
    var img = document.createElement("img")
    img.src = teste
    resultado.append(img)

    resultado.append(digimonAleatorio.level)
}





