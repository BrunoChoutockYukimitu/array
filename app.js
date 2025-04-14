//console.log(titulos[2])
//titulos[3] = "last adventure"
//console.dir(titulos)
//titulos.push("dragon ball")
//console.dir(titulos)

let titulos = ['dragon ball', 'solo levening', 'last adventure', 'naruto', 'record of ragnarok']
console.dir(titulos)
let titulosCategoria = new Array()
titulosCategoria.push("dragon ball")
titulosCategoria.push("solo levening")
titulosCategoria.push("last adventure")
titulosCategoria.push("naruto")
titulosCategoria.push("record of ragnarok")
console.dir(titulosCategoria)








document.getElementById("conteudo").innerHTML = "<ul>"

document.getElementById("conteudo").innerHTML += "<li>" + titulosCategoria[0] +"</li>"

document.getElementById("conteudo").innerHTML += "<li>" + titulosCategoria[1] +"</li>"

document.getElementById("conteudo").innerHTML += "<li>" + titulosCategoria[2] +"</li>"

document.getElementById("conteudo").innerHTML + "<li>" + titulosCategoria[3] + "</li>"

document.getElementById("conteudo").innerHTML += "<li>" + titulosCategoria[4] +"</li>"

document.getElementById("conteudo").innerHTML = "</ul>"
