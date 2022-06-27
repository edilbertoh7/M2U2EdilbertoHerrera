let menor ='';
let mayor ='';
let posmin='';
let posmax='';
let  rep =[];

let parrafo = document.getElementById('parrafo');
let parrafo1 = document.getElementById('parrafo1');
let parrafo2 = document.getElementById('parrafo2');

function calcular(numero1,numero2,numero3,numero4) {
        if (numero1 && numero2 && numero3 && numero4) {
        const a = [numero1,numero2,numero3,numero4];
        const b =a;
            for (let j = 0; j < b.length; j++) {
                for (let i = 0; i < a.length; i++) {
                    if (i!=j || !b[i]) {
                        if (a[i] == b[j] ) {
                            rep.push(` el numero ${a[i]} esta en la posicion  ${j+1}`)
                        }
                    }
                    if (Math.min.apply(null,a)==a[i]) {
                        menor = Math.min.apply(null,a);
                        posmin = (i+1);
                    }
                    if (Math.max.apply(null,a)==a[i]) {
                        mayor = Math.min.apply(null,a);
                        posmax = (i+1);
                    }
                }
            }

            if (rep != '') {
                parrafo.innerHTML=`Hay numeros repetidos  ${rep} `;
                parrafo1.innerHTML='';
                parrafo2.innerHTML='';
                rep='';
                inhabilita()
            }else{
                parrafo1.innerHTML=`el numero menor es  ${Math.min.apply(null,a)} y esta en la posicion ${posmin}`
                parrafo2.innerHTML=`el numero mayor es  ${Math.max.apply(null,a)} y esta en la posicion ${posmax}`
                parrafo.innerHTML='';
            }
    }else{
        alert('Debe completar todos los campos')
    }
    
}

function inhabilita() {
    $('.inhabilita').attr('disabled',true);
    $('.habilita').attr('disabled',false);
    
}