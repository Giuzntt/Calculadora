function Calcular(){
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)

    let operadores = document.getElementById('operadores').value
    
    let resultado = document.getElementById('res')
    let result = 0
    let mensagem = document.getElementById('msg')


    if(operadores==0){
        result = 'FAVOR FAZER O CÁLCULO!'
    }

    else if(operadores == 1){
         result = n1 + n2;
        
    } else if(operadores == 2){
        result = n1 - n2;
        
    } else if(operadores ==3){
         result = n1 * n2;
        
        } else{ 
        result = n1 / n2;

        if(n2!=0){
            result = n1 / n2;

        } else{
            
            result = 'Não é possivel dividir um numéro por zero!'
            mensagem.innerText = `Tente novamente com outro número,  ZERO é um conjunto infinito!`
        }
        
            
        }
        
        
        resultado.innerText = `${result}`
    }
   
    







    

