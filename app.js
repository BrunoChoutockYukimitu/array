//console.log(titulos[2])
//titulos[3] = "last adventure"
//console.dir(titulos)
//titulos.push("dragon ball")
//console.dir(titulos)

let titulos = ['dragon ball','solo levening','last adventure','naruto','record of ragnarok']
console.dir(titulos)
let titulosCategoria = new Array()
titulosCategoria.push("dragon ball")
titulosCategoria.push("solo levening")
titulosCategoria.push("last adventure")
titulosCategoria.push("naruto")
titulosCategoria.push("record of ragnarok")
console.dir(titulosCategoria)

document.getElementById("conteudo").innerHTML += titulosCategoria[0] + " - "
document.getElementById("conteudo").innerHTML += titulosCategoria[1] + " - "
document.getElementById("conteudo").innerHTML += titulosCategoria[2] + " - "
document.getElementById("conteudo").innerHTML += titulosCategoria[3] + " - "
document.getElementById("conteudo").innerHTML += titulosCategoria[4] + " - "