let nombre = document.getElementById('nombre');
let lnombre = document.getElementById('lnombre');
let nmaterias = document.getElementById('nmaterias');
function vernombre(valor) {
    if (valor =='' || valor == null) {
        alert('Por favor ingrese el nombre del estudiante');
    }else{
        nmaterias.disabled=false;
        
        lnombre.innerHTML =nombre.value+" Recuerde que puede matricular un maxiomo de 6 asignaturas";
    }
}

function cantMaterias(valor) {
    if (valor>6) {
        alert("Solo puede matricular un maximo de 6 materias")
    }else{
        for (let i = 0; i < valor; i++) {
            
            const parent = document.querySelector(".container");
            const row1 = document.querySelector(".row1-");
            const div = document.createElement("div");
            div.className=`primerDiv${i} row mt-2`
            div.id=`row1-${1}`
            parent.insertBefore(div, row1);
        }
        segundodiv(valor,'primerDiv','segundoDiv','col-sm-9','Nombre asignatura','materia','inhabilita','text');

        segundodiv(valor,'primerDiv','tercerDiv','col-sm-3','valor asignatura','vmateria','inhabilita','number');
        nmaterias.disabled=true;
    }
 }
 function segundodiv(valor,clase,nuevaclase,bootclase,place_holder,ID,myclase,tipo) {
    for (let i = 0; i < valor; i++) {
        const parent1 = document.querySelector(`.${clase}${i}`);
        const row2 = document.querySelector(".row2");
        const div = document.createElement("div");
        div.className=`${nuevaclase}${i} ${bootclase}`;
        div.id=`row2`;
        parent1.insertBefore(div, row2);

        const parent2 = document.querySelector(`.${nuevaclase}${i}`);
        const item1 = document.querySelector(".hola");
        const input = document.createElement("input");
        input.className=`form-control ${myclase}`;
        input.type=tipo;
        input.placeholder= place_holder;
        input.id=`${ID}${i+1}`;
        parent2.insertBefore(input, item1);
    }
 }
valor =[];
total =0;
let parrafo1 = document.getElementById('parrafo1');
let descuento = 0.20;//descuento del 20%
let papeleria = 20000;// valor papeleria
let carne =8000;// valor carne
 function calcular(arg) {
    for (let i = 0; i < arg; i++) {
         let vmateria= document.getElementById(`vmateria${i+1}`);
         valor.push(parseInt(vmateria.value)); 
    }
    for (let i = 0; i < valor.length; i++) {
        total= total+valor[i];
        console.log('aca el total = '+total);
    }
    const parent = document.querySelector(".resultado");
    parent.className='row mt-4 bg-white  text-center px-3 col-sm-11 mx-auto resultado';

    parrafo.innerHTML = `El total de las asignaturas matriculadas es ${total}`

    let fijos = papeleria+carne
    total =fijos+total
    descuento =total*descuento
    let gtotal = total - descuento
    
    parrafo1.innerHTML = `El valor de los costos fijos es  ${fijos}`
    parrafo2.innerHTML = `El valor del descuento 20% es  ${descuento}`
    parrafo3.innerHTML = `El valor a pagar es  ${gtotal}`

    total = total-(total*descuento)
    
    document.getElementById('boton1').style.display="block";
    document.getElementById('boton').style.display="none";
    
    $('.inhabilita').attr('disabled',true);
    
 }