const bracelets = [
    { id: 1, type: "pulsera", mark: "Benyon", name: "Pulsera ball", size: "S", price: 500, stock: 12 },
    { id: 2, type: "pulsera", mark: "Benyon", name: "Pulsera ball", size: "L", price: 1000, stock: 20 },
    { id: 3, type: "collar", mark: "Benyon", name: "Collar ball", size: "M", price: 500, stock: 17 },
    { id: 4, type: "collar", mark: "Benyon", name: "Collar squird", size: "XL", price: 1200, stock: 15 },
    { id: 5, type: "pulsera", mark: "Benyon", name: "Pulsera squird", size: "M", price: 700, stock: 8 },
];
console.table(bracelets);

/* -------------------------------------------------------------------------- */
/*                             Sistema de filtrado                            */
/* -------------------------------------------------------------------------- */
let filter = prompt("¿Desea filtrar? (Sí/No)").toLowerCase();

if (filter === "si") {
    let filterType = prompt("Filtrar por tipo (Pulsera/Collar):").toLowerCase();
    let filterSize = prompt("Filtrar por tamaño (S/M/L/XL):").toUpperCase();

    let braceletsFilter = bracelets.filter(function (bracelet) {
        return (
            (filterType === "" || bracelet.type.toLowerCase() === filterType) &&
            (filterSize === "" || bracelet.size === filterSize)
        );
    });

    if (braceletsFilter.length > 0) {
        console.log("Pulseras o collares filtrados:");
        for (const bracelet of braceletsFilter) {
            let mensaje = "ID: " + bracelet.id + ", Marca: " + bracelet.mark + ", Nombre: " + bracelet.name + ", Tamaño: " + bracelet.size + ", Precio: $" + bracelet.price + ", Stock disponible: " + bracelet.stock;
            console.log(mensaje);
        }
    } else {
        console.log("No se encontraron pulseras o collares que cumplan con los criterios de filtrado.");
    }
} else {
    console.log("No se aplicaron filtros.");
}


/* -------------------------------------------------------------------------- */
/*                             Sistema de carrito                             */
/* -------------------------------------------------------------------------- */

const carrito = [];

function agregarAlCarrito(id) {
    const braceletFind = bracelets.find((bracelet) => bracelet.id === id);

    if (braceletFind && braceletFind.stock > 0) {
        carrito.push(braceletFind);
        braceletFind.stock--;
        console.log(`Producto agregado al carrito: ${braceletFind.name}`);
    } else {
        console.log("Producto no disponible o ID no válido.");
    }
}

function quitarDelCarrito(id) {
    const indice = carrito.findIndex((bracelet) => bracelet.id === id);

    if (indice !== -1) {
        const braceletRemove = carrito.splice(indice, 1)[0];
        braceletRemove.stock++;
        console.log(`Producto quitado del carrito: ${braceletRemove.name}`);
    } else {
        console.log("ID no válido o producto no encontrado en el carrito.");
    }
}

while (true) {
    const accion = prompt("¿Qué deseas hacer? (agregar/quitar/ver/carrito/salir)").toLowerCase();

    switch (accion) {
        case "agregar":
            const idAdd = parseInt(prompt("Ingrese el ID del producto a agregar:"), 10);
            agregarAlCarrito(idAdd);
            break;
        case "quitar":
            const idRemove = parseInt(prompt("Ingrese el ID del producto a quitar:"), 10);
            quitarDelCarrito(idRemove);
            break;
        case "ver":
            console.log("Estado actual de las pulseras:");
            console.table(bracelets);
            break;
        case "carrito":
            console.log("Estado actual del carrito:");
            console.table(carrito);
            break;
        case "salir":
            console.log("Saliendo del programa.");
            break;//no entiendo el porque me tira error si pongo un return para salir del bucle
        default:
            console.log("Acción no válida. Inténtalo de nuevo.");
            break;
    }
}

