

document.getElementById('btn2').addEventListener('click', function () {
    alert('Hiciste clic en el Botón 2');
});

document.getElementById('btn3').addEventListener('click', function () {
    alert('Hiciste clic en el Botón 3');
});

document.getElementById('btn4').addEventListener('click', function () {
    alert('Hiciste clic en el Botón 4');
});

class Producto {
    constructor(nombre, cantidad, precio, total) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.total = total;
    }
    agregarProducto() {
        this.cantidad = this.cantidad + 1;
        this.total = this.cantidad * this.precio;
    }
    quitarProducto() {
        this.cantidad = this.cantidad - 1;
        this.total = this.cantidad * this.precio;
    }
}
let productos = [];
productos.push(new Producto("Coca Cola", 0, 2000, 0));
productos.push(new Producto("Arroz", 0, 1000, 0));
productos.push(new Producto("Cafe", 0, 2500, 0));
productos.push(new Producto("Leche", 0, 1500, 0));


const botCoca = document.querySelector("#coca");
botCoca.addEventListener("click", () => {
    if (productos[0].cantidad === 0) {
        const divCuerpo = document.querySelector("#divcuerpo1");
        divCuerpo.innerHTML = `<div id='divcoc'><b>Producto:</b>  ${productos[0].nombre} <b>Cantidad:</b> <span id='cantCoca'></span>      <button class='elim' id='elimcoc'>X</button></div>`;

        const elimCoca = document.querySelector("#elimcoc");
        elimCoca.addEventListener("click", () => {
            productos[0].quitarProducto();

            const rowCoca = document.querySelector("#divcoc");
            rowCoca.querySelector("#cantCoca").innerHTML = productos[0].cantidad;

            if (productos[0].cantidad === 0) {
                divCuerpo.innerHTML = "";
            }
        });
    }

    productos[0].agregarProducto();
    const rowCoca = document.querySelector("#divcoc");
    rowCoca.querySelector("#cantCoca").innerHTML = productos[0].cantidad;

});


const botArroz = document.querySelector("#arroz");
botArroz.addEventListener("click", () => {
    if (productos[1].cantidad === 0) {
        const divCuerpo = document.querySelector("#divcuerpo2");
        divCuerpo.innerHTML = `<div id='divarroz'><b>Producto:</b>  ${productos[1].nombre} <b>Cantidad:</b> <span id='cantArroz'></span>      <button class='elim' id='elimarroz'>X</button></div>`;
        

        const elimarroz = document.querySelector("#elimarroz");
        elimarroz.addEventListener("click", () => {
            productos[1].quitarProducto();

            const rowArroz = document.querySelector("#divarroz");
            rowArroz.querySelector("#cantArroz").innerHTML = productos[1].cantidad;

            if (productos[1].cantidad === 0) {
                divCuerpo.innerHTML = "";
            }
        });
    }

    productos[1].agregarProducto();
    const rowArroz = document.querySelector("#divarroz");
    rowArroz.querySelector("#cantArroz").innerHTML = productos[1].cantidad;
});


const botCafe = document.querySelector("#cafe");
botCafe.addEventListener("click", () => {
    if (productos[2].cantidad === 0) {
        const divCuerpo = document.querySelector("#divcuerpo3");
        divCuerpo.innerHTML = `<div id='divcafe'><b>Producto:</b>  ${productos[2].nombre} <b>Cantidad:</b> <span id='cantCafe'></span>      <button class='elim' id='elimcafe'>X</button></div>`;

        const elimcafe = document.querySelector("#elimcafe");
        elimcafe.addEventListener("click", () => {
            productos[2].quitarProducto();

            const rowCafe = document.querySelector("#divcafe");
            rowCafe.querySelector("#cantCafe").innerHTML = productos[2].cantidad;

            if (productos[2].cantidad === 0) {
                divCuerpo.innerHTML = "";
            }
        });
    }

    productos[2].agregarProducto();
    const rowCafe = document.querySelector("#divcafe");
    rowCafe.querySelector("#cantCafe").innerHTML = productos[2].cantidad;
});


const botLeche = document.querySelector("#leche");
botLeche.addEventListener("click", () => {
    if (productos[3].cantidad === 0) {
        const divCuerpo = document.querySelector("#divcuerpo4");
        divCuerpo.innerHTML = `<div id='divleche'><b>Producto:</b>  ${productos[3].nombre} <b>Cantidad:</b> <span id='cantLeche'></span>      <button class='elim' id='elimleche'>X</button></div>`;

        const elimleche = document.querySelector("#elimleche");
        elimleche.addEventListener("click", () => {
            productos[3].quitarProducto();

            const rowLeche = document.querySelector("#divleche");
            rowLeche.querySelector("#cantLeche").innerHTML = productos[3].cantidad;

            if (productos[3].cantidad === 0) {
                divCuerpo.innerHTML = "";
            }
        });
    }

    productos[3].agregarProducto();
    const rowLeche = document.querySelector("#divleche");
    rowLeche.querySelector("#cantLeche").innerHTML = productos[3].cantidad;
});


const botTotal = document.querySelector("#btn1");
botTotal.addEventListener("click", () => {

    let totalTexto = "Compraste "
    let total = 0;
    for (const prod of productos) {
        if (prod.cantidad > 0) {
            totalTexto += ` ${prod.cantidad} ${prod.nombre}, `;
            total += prod.total;
        }
    }
    totalTexto += `Por un total de ${total} pesos`;

    const compraTotal = document.querySelector("#divTotal");
    compraTotal.innerHTML = `<div> ${totalTexto} </div>`;

})
