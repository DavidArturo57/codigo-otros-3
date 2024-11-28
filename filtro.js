// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

// Obtener el contenedor de productos donde se mostrarán en el HTML
const li = document.querySelector("#lista-de-productos"); // Aquí se usa el id "lista-de-productos" para acceder al contenedor de productos
const $i = document.querySelector('.input'); // Seleccionamos el campo de entrada de texto donde el usuario escribe el filtro
const botonDeFiltro = document.querySelector("button"); // Seleccionamos el botón de filtro

// Función para mostrar los productos en la página
function mostrarProductos(productos) {
  li.innerHTML = ''; // Limpiar los productos actuales antes de volver a mostrarlos
  productos.forEach(producto => {
    // Creamos un nuevo contenedor para cada producto
    const d = document.createElement("div");
    d.classList.add("producto"); // Añadimos una clase para estilos CSS

    // Creamos un párrafo para el nombre del producto
    const ti = document.createElement("p");
    ti.classList.add("titulo"); // Añadimos clase para estilizar el nombre
    ti.textContent = producto.nombre; // Asignamos el nombre del producto

    // Creamos una imagen para el producto
    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img); // Establecemos la imagen del producto

    // Añadimos los elementos al contenedor del producto
    d.appendChild(ti);
    d.appendChild(imagen);

    // Finalmente, añadimos el producto al contenedor principal
    li.appendChild(d);
  });
}
// Mostrar todos los productos al inicio
mostrarProductos(productos);

// Función de filtrado que se ejecuta cuando se aplica el filtro
const filtrado = (productos, texto) => {
  return productos.filter(item => 
    // Comprobamos si el tipo o el color del producto coinciden con el texto de búsqueda
    item.tipo.toLowerCase().includes(texto.toLowerCase()) || 
    item.color.toLowerCase().includes(texto.toLowerCase())
  );
};

// Evento al hacer clic en el botón de filtro
botonDeFiltro.onclick = function() {
  const texto = $i.value.trim(); // Obtenemos el texto ingresado en el campo de búsqueda y lo recortamos (eliminamos espacios al principio y al final)
  console.log("Filtro aplicado:", texto);

  // Si el campo de texto está vacío, mostramos todos los productos
  // Si no, filtramos los productos según el texto ingresado
  const productosFiltrados = texto ? filtrado(productos, texto) : productos;

  // Llamamos a la función mostrarProductos para actualizar la lista mostrada con los productos filtrados
  mostrarProductos(productosFiltrados);
};