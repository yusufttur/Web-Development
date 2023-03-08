//if-else
var a = 1;
if (a == 1) {
    console.log("equals")
} else {
    console.log("not equals")
}

//if-else if
var celcius = 20;
if (celcius > 15 && celcius < 30) {
    console.log("nice:)");
} else if (celcius > 30) {
    console.log("hot!");
} else {
    console.log("cold!!!");
}

//switch-case
switch (new Date().getDay()) {
    case 0:
        console.log(`today: Sunday`);
        break;
    case 1:
        console.log(`today: Monday`);
        break;
    case 2:
        console.log(`today: Tuesday`);
        break;
    case 3:
        console.log(`today: Wednesday`);
        break;
    case 4:
        console.log(`today: Thursday`);
        break;
    case 5:
        console.log(`today: Friday`);
        break;
    case 6:
        console.log(`today: Saturday`);
        break;
    default:
        break;
}
