/*let myPromise=new Promise((resolve,reject)=>{
    let payment=true;
    if (payment)
        {
resolve("payment succesfull");

    }
else
    {
reject("payment failed");
}
});

myPromise.then((result)=>{
    console.log(result);

})
.catch((error)=>{
    console.log(error);
});*/


//await

function getData(){
    return new Promise((resolve)=>
    {
        setTimeout(()=>
        {
     resolve ("data received");

        },2000);
    });
}
async function displayData(){
    console.log("fetching data");
    let result=await getData();
    console.log(result);

}
displayData();