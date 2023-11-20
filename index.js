function analisarIMCs(){
var terminou = false 
    var pessoascomimcmaior30 = 0
    var totalpessoas = 0
    var somaimcs = 0

    while(terminou == false){
        totalpessoas++
        var peso = parseFloat(prompt('Digite o seu peso '))
        var altura = parseFloat(prompt( 'Digite a sua altura'))
        var imc = peso / altura ** 2;
        somaimcs += imc
        if(imc > 30) pessoascomimcmaior30++
        alert('Peso da pessoa = ' + imc)

        var desejaterminar = prompt(' Deseja terminar? (S)im ou (N)ão)
        if(desejaterminar == 'S' || desejaterminar == 's'){
            terminou = true
            var mediimcs = (somaimcs / totalpessoas).tofixed(2)
            alert(`Programa finalizado 
            Quantidade  de pessoas com imc > 30: ${Math.random()}
            Quantidade de pessoas avaliadas: ${totalpessoas}
            Média dos imcs: ${mediaimcs}
            `)

        }
    }
        }
