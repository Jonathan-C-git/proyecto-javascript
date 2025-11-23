//variables
let seleccion;
const menu =
  "\t¡Bienvenidos!" +
  "\nSeleccione una opción\n" +
  "\n1- Lista de productos" +
  "\n2- Comprar" +
  "\n3- Ver carrito" +
  "\n4- Salir";

let listaProductos = [
  { id: 1, nombre: "Fernet", precio: 12000 },
  { id: 2, nombre: "Vino Tinto", precio: 6000 },
  { id: 3, nombre: "Corona", precio: 5000 },
  { id: 4, nombre: "Vodka", precio: 7500 },
  { id: 5, nombre: "Coca Cola", precio: 3500 },
];

let listaCarrito = [];

const carrito = function (lista) {
    //muestra el listado de compras del usuario
    let total = 0;
    let mostrar = "";

    if (lista.length === 0 || lista == null){
        alert("Lista vacia");
    }
    else{
        //en lista los productos y suma el total
        for (const element of lista){
            mostrar += "\n" + element.nombre + " = $" + element.precio;
            total += element.precio;
        }
        mostrar += "\nTotal: $" + total;
        alert(mostrar);
    }
}

menuPrincipal();

/*------------------ funciones ---------------------*/
function menuPrincipal() {
    //implementacion del menu principal
  do {
    seleccion = parseInt(prompt(menu));

    switch (seleccion) {
      case 1:
        mostrarLista(listaProductos);
        break;
      case 2:
        comprar(listaProductos);
        break;
      case 3:
        carrito(listaCarrito);
        break;
      case 4:
        alert("Gracias por su visita");
        break;
      default:
        alert("La opción ingresada no es valida");
        break;
    }
  } while (seleccion != 4);
};

function mostrarLista(lista) {
  let mostrar = "";
  for (const producto of lista) {
    mostrar = mostrar + "\n" + producto.nombre;
  }

  alert(mostrar);
}

function comprar(lista) {
  //muestra el listado de productos con su precio
  let mostrar = "Seleccione la opción a comprar:\n";
  let opcionVolver = lista.length + 1;

  for (const producto of lista) {
    mostrar =
      mostrar +
      "\n" +
      producto.id +
      ". " +
      producto.nombre +
      " - $" +
      producto.precio;
  }
  //opcion para volver al menu
  mostrar = mostrar + "\n" + opcionVolver + ". Volver al menu principal";

  agregarCompra(opcionVolver, mostrar, lista);
}
function agregarCompra(opcionV, listaMenu, lista) {
  let seleccionCompra;
  do {
    seleccionCompra = parseInt(prompt(listaMenu));

    //verfica la opcion ingresada
    if ((seleccionCompra > 0) && (seleccionCompra < opcionV)){
        listaCarrito.push(lista[seleccionCompra-1]);
        alert("¡Compra realizada con exito!" + "\n" + lista[seleccionCompra-1].nombre);
    } 
    else if (seleccionCompra == opcionV){
        menuPrincipal();
    } 
    else {
        alert("La opción ingresada no es valida");
    }
  } while (seleccionCompra != opcionV);
}