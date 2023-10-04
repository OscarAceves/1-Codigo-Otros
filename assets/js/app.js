//Direccion de la API que usara el programa
const baseEndpoint = 'https://api.github.com';

//Se concatena la dirección de la API y la parte de /users para generar otro link
const usersEndpoint = `${baseEndpoint}/users`;

//Se seleccionan elementos del html por su clase y se asignan a una variable
const $n = document.querySelector('.name');//Se corrige notación para clase.
const $b = document.querySelector('.blog');//Se corrige notación para clase
const $l = document.querySelector('.location');


//Funcion para buscar al usuario que se asigna
async function displayUser(username) {//Se establece por el await en el fetch que es una funcion asincrona
  
  //Texto que aparece si la espera es larga
  $n.textContent = 'cargando...';
  
  //Se declara la variable response y se le asigna los datos obtenidos de la nueva dirección generada de la concatenación de la variable ahora unida con el usuario: https://api.github.com/users/stolinski
  const response = await fetch(`${usersEndpoint}/${username}`);
  //Se agrega await al JSON para que tenga oportunidad de asignarse a la variable data y no regrese valores undefined
  const data = await response.json();
  //Se imprime en la consola todo el objeto recibido
  console.log(data);

  //Se asigna la nueva información obtenida a las variables correspondientes a elementos del HTML
  $n.textContent = `${data.name}`;//Se corrige notación de las comillas simples ``
  $b.textContent = `${data.blog}`;//Se corrige notación de las comillas simples ``
  $l.textContent = `${data.location}`;//Se corrige notación de las comillas simples ``
}

//Funcion que se ejecuta al fallar la promesa
function handleError(err) {
  //impresión en consola de error
  console.log('OH NO!');
  //Imprime en consola el tipo de error
  console.log(err);
  //se agrega tipo de error a variable de elemento en html para que tambien aparezca en el navegador
  $n.textContent = `Algo salió mal: ${err}`;//Se corrige a variable declarada y se agrega ;
}

displayUser('stolinski').catch(handleError); //Se llama la funcion con el respectivo usuario, se asigna como catch la función handleError