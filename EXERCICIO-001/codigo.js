
while(true){
    var dig_1 = parseInt(prompt("Digite um numero"))
    var dig_2 = parseInt(prompt("Digite mais um numero"))
    var operação = prompt("Qual operação Você deseja realizar? (+, -, x ou /)") 
    
    if(operação == "+"){
        alert(dig_1 + dig_2)
    }

    else if(operação == "-"){
        alert(dig_1 - dig_2)
    }

    else if(operação == "x"){
        alert(dig_1 * dig_2)
    }

    else if(operação == "/"){
        alert(dig_1 / dig_2)
    }

    else("operação invalida")

    var continuar = prompt("Deseja Continuar (S/N)")

    if(continuar == "N"){
        break
    }

}


