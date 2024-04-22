

document.getElementById('btn2').addEventListener('click', function() {
    alert('Hiciste clic en el Botón 2');
});

document.getElementById('btn3').addEventListener('click', function() {
    alert('Hiciste clic en el Botón 3');
});

document.getElementById('btn4').addEventListener('click', function() {
    alert('Hiciste clic en el Botón 4');
});

contadorCoca=0
contadorArroz=0
contadorCafe=0
contadorLeche=0
suma=0

class Producto{
    constructor(nombre, cantidad, precio, total){
        this.nombre = nombre
        this.cantidad = cantidad
        this.precio = precio
        this.total = total
        
    }}

const botCoca=document.querySelector("#coca");
botCoca.addEventListener("click", ()=>{
    const compraCoca=document.querySelector("#divcuerpo");
    compraCoca.innerHTML+="<div>Compraste 1 coca</div>";
    contadorCoca++;
    suma+=2000;
})

const botArroz=document.querySelector("#arroz");
botArroz.addEventListener("click", ()=>{
    const compraArroz=document.querySelector("#divcuerpo");
    compraArroz.innerHTML+="<div>Compraste 1 arroz</div>";
    contadorArroz++;
    suma+=1000;
})
const botCafe=document.querySelector("#cafe");
botCafe.addEventListener("click", ()=>{
    const compraCafe=document.querySelector("#divcuerpo");
    compraCafe.innerHTML+="<div>Compraste 1 cafe</div>";
    contadorCafe++;
    suma+=2500;
})

const botLeche=document.querySelector("#leche");
botLeche.addEventListener("click", (a)=>{
    const compraLeche=document.querySelector("#divcuerpo");
    compraLeche.innerHTML+="<div>Compraste 1 leche</div>";
    contadorLeche++;
    suma+=1500;
})


const botTotal=document.querySelector("#btn1");
botTotal.addEventListener("click", ()=>{
    const compraTotal=document.querySelector("#divcuerpo");
    compraTotal.innerHTML += `<div> Compraste  ${contadorCoca} Cocas,  ${contadorArroz}  Arroz, ${contadorCafe}  Cafe y ${contadorLeche} Leche. Por un total de ${suma} pesos</div>`;

})
