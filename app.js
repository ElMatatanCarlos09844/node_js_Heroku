
//import fetch from 'node-fetch';
//import map, {mapObjectSkip} from 'map-obj';

/*const { frutas, dinero } = require("./frutas.js"); //guardar lo que viene del archivo frutas.js
const cowsay = require("cowsay");

frutas.forEach(item => {
    console.count(item);
});

console.log(dinero);

console.log(cowsay.say({
    text:"hola perrro",
    e: "oO",
    T:"U"
}));

const numero = (num1, num2) => (`El numero es: ${num1 + num2}`)
const resultado = numero(5,6)
console.log(resultado)


const web = {
  nombre : "bluuweb",
  links : {
    enlace:"www.bluuweb.cl"
  },
  redesSociales:{
    youtube:{
        enlace:"www.youtube.com/canal",
        nombre:"Youtube"
    }
  }
};

console.log(`${web.redesSociales.youtube.enlace},${web.redesSociales.youtube.nombre}`)
const {enlace,nombre} = web.redesSociales.youtube;

//---- F E T C H -------------------------------

console.log("nombre: "+nombre + "\tenlace: "+ enlace)
//const f = require("node-fetch");



const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    .then( (res) => {
        return res.json()
    })
    .then( (data) => {
        //console.log(data.results)

        data.results.forEach( (element) => {
            console.log("Elemento: "+element.name)
        });
    })
    .catch( (err) => {console.log(err)})


const pokemonGets = async() => {
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();

        console.log(data.results)
    }catch (err){console.log(err)}
}

pokemonGets();

*/
// ---------- M A P ---------------------------------------

/*
const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    .then( (res) => {
        return res.json()
    })
    .then( (data) => {
        //console.log(data.results)
        let arrayNombre = [];
        data.results.forEach( (element) => {
            //console.log("Elemento: "+element.name)
            arrayNombre.push(element.name);
        });
        console.log(arrayNombre)
    })
    .catch( (err) => {console.log(err)})

*/

// ---- LO MISMO DE ARRIBA PERO CON  M A P
/*
const pokemonGets = async() => {
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();
        //console.log(data.results)
        const arrayNombres = data.results.map( (pokemon) => {return pokemon.name})
        console.log(arrayNombres)
    }catch (err){console.log(err)}
}
pokemonGets();
*/
//-------- F I L T E R
/*
const pokemonGets = async() => {
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();
        //console.log(data.results)
        const arrayNombres = data.results.filter( (pokemon) => {return pokemon.name != 'bulbasaur'})
        console.log(arrayNombres)
    }catch (err){console.log(err)}
}
pokemonGets();

*/

//-------F u n d a m e n t o s  d e  H T T P
/*
const http = require("http");
const server = http.createServer( (req, res) =>{
    //console.log("");
    res.end('estoy respondiendo a tu solicitud v2');
});

const puerto = 3000;
server.listen(puerto, () => {
    console.log("Escuchando solicitudes");
});
//dice que con localhost::3000 pero es así creo http://localhost:3000/
// no me funcionó y usé mi ip http://127.0.0.1:3000/

*/

// I n t r o d u c c i o n  a  E x p r e s s . j s 
// T e m p l a t e s  E n g i n e s  ( E J S )  c o n  E x p r e s s

const express = require('express')
//const { send } = require('express/lib/response')
const app = express()
const port = 3000

// Seteando motor de plantillas EJS 
app.set('view engine', 'ejs')
// las vistas están en la carpeta view
app.set('views', __dirname + '/view')

//Es para poner la carpeta public de manera dinamica para cuando se suba al un hosting
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) =>{
    res.render("index", {titulo:"mi titulo dinamico v2"})
})

app.get(('/servicios'), (req, res) => {
    res.render(("servicios"), {servicioTitle:"Titulo del servicio dinámico"})
})

//Se pone hasta abajo para evitar conflicto con las rigast get dadas anteriormente
//En caso de errores de escritura en las URL se presponde con la paguina de error 404
app.use((req, res, next) => {
    res.status(404).render("404")
})

app.listen(port, () =>{

    console.log('servidor a su servicio en el puerto: ', port)
})

/*
Primero se hace un archivo .gitignore en el que se pone "node_modules" y que ignorará la carpeta node_modules

Despues en la carpeta de trabajo se pone 
    heroku login
    git init 
    heroku git:remote -a express-prueba-carlos-cisneros
    git add .
    git commit -am "make it better"


*/

