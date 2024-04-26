

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

// let compraCoca=[];



class Producto{
    constructor(nombre, cantidad, precio, total){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.total = total; 
    }
    agregarProducto(){
        this.cantidad=this.cantidad+1;
        this.total=this.cantidad*this.total;
    }
    quitarProducto(){
        this.cantidad=this.cantidad-1;
        this.total=this.cantidad*this.total;
    }
}
let productos = [];
productos.push(new Producto("coca",0,2000,0));
productos.push(new Producto("arroz",0,1000,0));
productos.push(new Producto("cafe",0,2500,0));
productos.push(new Producto("leche",0,1500,0));

// console.log(productos[0]);
// console.log(productos[0].cantidad*productos[0].precio);

// for(const prod of productos){
// prod.agregarProducto();
// }
// console.log(productos);


const botCoca=document.querySelector("#coca");
botCoca.addEventListener("click", ()=>{
    if(productos[0].cantidad===0){
    productos[0].agregarProducto();
    const compraCoca=document.querySelector("#divcuerpo1");
    compraCoca.innerHTML="<div id='divcoc'>Compraste 1 coca <button class='elim' id='elimcoc'>X</button></div>";
}else{
    productos[0].agregarProducto();
    const compraCoca=document.querySelector("#divcuerpo1");
    compraCoca.innerHTML=`<div id='divcoc'>Compraste ${productos[0].cantidad} cocas <button class='elim' id='elimcoc'>X</button></div>`;
}


const elimCoca=document.querySelector("#divcoc");
elimCoca.addEventListener("click", ()=>{
    if(productos[0].cantidad===1){
        productos[0].quitarProducto();

        const compraCoca=document.querySelector("#divcuerpo1");
        compraCoca.innerHTML=`<div id='divcoc'><button class='elim' id='elimcoc'></button></div>`;
        // compraCoca.remove();
    }else {
        productos[0].quitarProducto();
        const compraCoca=document.querySelector("#divcuerpo1");
        compraCoca.innerHTML=`<div id='divcoc'>Compraste ${productos[0].cantidad} cocas <button class='elim' id='elimcoc'>X</button></div>`;
    }
});

});



const botArroz=document.querySelector("#arroz");
botArroz.addEventListener("click", ()=>{
    if(productos[1].cantidad===0){
    productos[1].agregarProducto();
    const compraArroz=document.querySelector("#divcuerpo2");
    compraArroz.innerHTML="<div id='divarroz'>Compraste 1 Arroz <button class='elim' id='elimarroz'>X</button></div>";
}else{
    productos[1].agregarProducto();
    const compraArroz=document.querySelector("#divcuerpo2");
    compraArroz.innerHTML=`<div id='divarroz'>Compraste ${productos[1].cantidad} Arroz <button class='elim' id='elimarroz'>X</button></div>`;
    }
})


const botCafe=document.querySelector("#cafe");
botCafe.addEventListener("click", ()=>{
    if(productos[2].cantidad===0){
    productos[2].agregarProducto();
    const compraCafe=document.querySelector("#divcuerpo3");
    compraCafe.innerHTML="<div id='divcafe'>Compraste 1 Café <button class='elim' id='elimcafe'>X</button></div>";
}else{
    productos[2].agregarProducto();
    const compraCafe=document.querySelector("#divcuerpo3");
    compraCafe.innerHTML=`<div id='divcafe'>Compraste ${productos[2].cantidad} Cafés <button class='elim' id='elimcafe'>X</button></div>`;
    }
})


const botLeche=document.querySelector("#leche");
botLeche.addEventListener("click", ()=>{
    if(productos[3].cantidad===0){
    productos[3].agregarProducto();
    const compraLeche=document.querySelector("#divcuerpo4");
    compraLeche.innerHTML="<div id='divleche'>Compraste 1 Leche <button class='elim' id='elimleche'>X</button></div>";
}else{
    productos[3].agregarProducto();
    const compraLeche=document.querySelector("#divcuerpo4");
    compraLeche.innerHTML=`<div id='divleche'>Compraste ${productos[3].cantidad} Leches <button class='elim' id='elimleche'>X</button></div>`;
    }
})



const botTotal=document.querySelector("#btn1");
botTotal.addEventListener("click", ()=>{
    const compraTotal=document.querySelector("#divcuerpo");
    compraTotal.innerHTML += `<div> Compraste  ${productos[0].cantidad} Cocas,  ${productos[1].cantidad}  Arroz, ${productos[2].cantidad}  Cafe y ${productos[3].cantidad} Leche. Por un total de ${productos[0].total + productos[1].total + productos[2].total + productos[3].total } pesos</div>`;

})
