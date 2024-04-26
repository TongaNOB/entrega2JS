

document.getElementById('btn2').addEventListener('click', function() {
    alert('Hiciste clic en el Botón 2');
});

document.getElementById('btn3').addEventListener('click', function() {
    alert('Hiciste clic en el Botón 3');
});

document.getElementById('btn4').addEventListener('click', function() {
    alert('Hiciste clic en el Botón 4');
});

let contadorCoca=0
let contadorArroz=0
let contadorCafe=0
let contadorLeche=0
let suma=0

let compraCoca=[];



// class Producto{
//     constructor(nombre, cantidad, precio, total){
//         this.nombre = nombre
//         this.cantidad = cantidad
//         this.precio = precio
//         this.total = total
        
//     }}



const botCoca=document.querySelector("#coca");
botCoca.addEventListener("click", ()=>{
    if(contadorCoca===0){
    const compraCoca=document.querySelector("#divcuerpo1");
    compraCoca.innerHTML="<div id='divcoc'>Compraste 1 coca <button id='elimcoc'>X</button></div>";
    contadorCoca++;
    suma+=2000;
    }else{
        const compraCoca=document.querySelector("#divcuerpo1");
        contadorCoca++;
    compraCoca.innerHTML=`<div id='divcoc'>Compraste ${contadorCoca} cocas <button id='elimcoc'>X</button></div>`;
    suma+=2000;
    }
})

const botElim=document.querySelector("#elimcoc");
botElim.addEventListener("click", ()=>{
    if(contadorCoca===1){
    const eliminarCocaCarrito=document.querySelector("#elimcoc");
    eliminarCocaCarrito.remove();
    contadorCoca--;
    suma-=2000;
    }else{
        const compraCoca=document.querySelector("#divcuerpo1");
        contadorCoca--;
    compraCoca.innerHTML=`<div id='divcoc'>Compraste ${contadorCoca} cocas <button class='elim'>X</button></div>`;
    suma-=2000;
    }
})





const botArroz=document.querySelector("#arroz");
botArroz.addEventListener("click", ()=>{
    const compraArroz=document.querySelector("#divcuerpo");
    compraArroz.innerHTML+="<div>Compraste 1 arroz<button class='elim'> X</button></div>";
    contadorArroz++;
    suma+=1000;
})
const botCafe=document.querySelector("#cafe");
botCafe.addEventListener("click", ()=>{
    const compraCafe=document.querySelector("#divcuerpo");
    compraCafe.innerHTML+="<div>Compraste 1 cafe<button class='elim'> X</button></div>";
    contadorCafe++;
    suma+=2500;
})

const botLeche=document.querySelector("#leche");
botLeche.addEventListener("click", (a)=>{
    const compraLeche=document.querySelector("#divcuerpo");
    compraLeche.innerHTML+="<div>Compraste 1 leche<button class='elim'> X</button></div>";
    contadorLeche++;
    suma+=1500;
})




const botTotal=document.querySelector("#btn1");
botTotal.addEventListener("click", ()=>{
    const compraTotal=document.querySelector("#divcuerpo");
    compraTotal.innerHTML += `<div> Compraste  ${contadorCoca} Cocas,  ${contadorArroz}  Arroz, ${contadorCafe}  Cafe y ${contadorLeche} Leche. Por un total de ${suma} pesos</div>`;

})





// class CompraProductos{
//     constructor(producto, cantidad, importe){
//         this.producto=producto
//         this.cantidad=cantidad
//         this.importe=importe
//     }
//     agregar(){
//         this.cantidad=this.cantidad+1
//         this.importe+=this.importe
//     }
//     quitar(){
//         this.cantidad=this.cantidad-1
//         this.importe-=this.importe
//     }
// }

// const carrito=[];


// const botCoca=document.querySelector("#coca");
// botCoca.addEventListener("click", ()=>{
        
//     if (!compraCoca) {
//         CompraCoca=new CompraProductos("Coca", 1 , 2000);
//         console.log(compraCoca);
//         }else{
//            acompraCoca.agregar();
//             console.log(compraCoca);
//         }

//     // carrito.forEach(element => {
//     //     console.log(element);
        
//     });

    
//     const compraCoca=document.querySelector("#divcuerpo");
    
//     compraCoca.innerHTML="<div>Compraste 1 coca <button class='elim'> X</button></div>";
//     contadorCoca++;
//     suma+=2000;
// })

// let bandera=true

// while (bandera){
//     let producto=prompt("Ingrese producto")
//     let cantidad=prompt("Ingrese cantidad")
//     let importe=prompt("Ingrese precio")
//     let compraProvisoria=new CompraProductos(producto, cantidad, importe)
// }