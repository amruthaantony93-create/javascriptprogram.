//global scope
/*let name="amrutha"
function displayName(){
    console.log(name);

}
displayName();
console.log(name);*/

//function scope

/*function showdeteils(){
    let name="amrutha";
    let age=32;
    console.log( name);
    console.log(age);

}
showdeteils();
console.log(name);
console.log(age);*/

//block scope
if (true){
    const name="amrutha";
    var city="ernakulam"
    let age=32;
    console.log(name);
    console.log(age);
    
console.log(city);
}
