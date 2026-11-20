function orderFood(callback){
    console.log("food ordered");
    setTimeout(()=>
    {
        console.log("food is ready");
        callback();
    },3000);
}

function recivedFood(){
    console.log("food is recived");
}
orderFood(recivedFood);