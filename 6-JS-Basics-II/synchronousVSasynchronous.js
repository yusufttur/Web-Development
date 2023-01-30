//Asynchronous
setTimeout(function() {
    console.log("3 sec")
}, 3000);

function firstName(){
    console.log("John");
}

function lastName(){
    console.log("Doe");
}

firstName();
lastName();

//John
//Doe
//3 sec
