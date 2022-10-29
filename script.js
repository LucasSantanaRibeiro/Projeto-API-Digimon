async function confirmar() {
    var nivel = document.getElementById("nivelDigimon").value
    var API = `https://digimon-api.herokuapp.com/api/digimon/level/${nivel}`



    var response = await fetch(API)
    var BodyJson = await response.json()
    var primeiro = BodyJson[0]

    console.log(primeiro)

    var resultado = document.getElementById("resultado")

    resultado.innerHTML = "";

    var p = document.createElement("p")
    p.innerText = primeiro.name
    resultado.append(p)

    var teste = primeiro.img
    var img = document.createElement("img")
    img.src = teste
    resultado.append(img)

    resultado.append(primeiro.level)
}





