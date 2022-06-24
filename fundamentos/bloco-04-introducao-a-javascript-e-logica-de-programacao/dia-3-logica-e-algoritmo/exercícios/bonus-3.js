let n = 5

for (let linha = 0; linha <= n+1 ; linha+=1) {
    
    let triangulo = ""
    let espacoVazio = ""
    for (let linha2 = 0; linha2 < n; linha2+=1){
       
        if (linha2 > n-linha) {
            triangulo += "*"
        }else {    
            espacoVazio += " "
        }    
        
    }

    console.log(espacoVazio + triangulo);
    
}

