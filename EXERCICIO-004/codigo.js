var escondido = 20

var num = null

while(true){
    num = parseInt(prompt("tente adivinhar o numero 0 a 100"))

    if (num > 20){
        alert("maior")
    }
    else if (num < 20){
        alert("menor")
    }
    else{
        alert("acertou mizeravel")
        break
    }

}
