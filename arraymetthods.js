//for each method
let students=["amu","anu","vinu"];
students.forEach(function(name){
    console.log(name);
});


//map method

let numbers=[1,2,3,4,5];
let result = numbers.map(function(num){
    return num*1;
    
})
console.log(result);


let numbers2=[55,60,25,35,45];
numbers2.filter(function(digit){
    return digit%2==0;


})
console.log(digit);


let, names=["neenu","sinu","jinu","vinu"];
let girls=name.map(function(name)
{
    return name.toUppercase();

})
console.log(girls);


//filter method

let numbers1=[10,20,30,40,80];
let digit=numbers1.filter(function(num){
    return num>15;

})
console.log(digit);



let number2 = [5,10,25,30,45];
let digits=numbers2.filter(function(digit)
{
    return digit%2===0;
})

console.log(digits);
