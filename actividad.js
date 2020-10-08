let deportes = new Array();
deportes.push('Futbol');
deportes.unshift('Basquet');

let musica = new Array('Rock', 'Salsa', 'Balada');

let entretenimiento = deportes.concat(musica);
let array = entretenimiento.join('-');
console.log(array);
let arrayOrdenado = entretenimiento.sort();
for(let i=0; i<arrayOrdenado.length; i++){
    console.log(arrayOrdenado[i]);
}
