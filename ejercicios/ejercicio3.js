//3.1 Dado el siguiente array, devuelve un array con sus nombres  utilizando .map().

/* const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];


const usersnames = users.map (user => user.name);

console.log(usersnames);
 */

// 3.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.


const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
 
/* const newnames = users.map(user => {
return user.name.startsWith("A") ? "Anacleto" : user.name; //Método abreviado

});

console.log(newnames);
  */
//Método con IF/ELSE

const newnames = users.map(user => {

let name;

if (user.name.startsWith("A")) {
name = "Anacleto";

} else {
name =user.name;
}

return name;


}); 

console.log(newnames);

 
//3.3 Dado el siguiente array, devuelve una lista que contenga los valores 
//de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
//cuando el valor de la propiedad isVisited = true.

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

 const citynames = cities.map(city => {
if (city.isVisited) {
return `${city.name} (Visitado)`;

}  else {
return city.name;


}
});

console.log (citynames);