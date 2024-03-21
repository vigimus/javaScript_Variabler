var Viktor = "Dem här servetterna gör mig hungrig" + "!";
var three = 3;

// En variabel måste börja med en bokstav
// En variabel får inte börja med en symbol 
//Kan däremot börja med _ eller $

//camelCase är praxis i Javascript se nedan:
var firstnumber // fel sätt
var firstNumber // rätt sätt

// Testa nedan i en webbläsare som Safari eller Chrome
prompt();
"Hej";

prompt("Vad är ditt användarnamn?") //Ställer oss en fråga och ber att fylla i något
// i ett fält

var forsta = prompt("Skriv ditt första nummer");
var andra = prompt("Skriv ditt andra nummer");


forsta
andra

Snyggare Number(forsta) Number(forsta); //Så blir det nummer typer precis som de vi
// vill få

var sum = Number(forsta) + Number(forsta);

// En ruta "pop-ruta" som bara säger text till oss
alert("Hejsan där!");

// Du får skriva in första och andra numret så får du en ruta med summan
var forsta = prompt("Skriv ditt första nummer");
var andra = prompt("Skriv ditt andra nummer");
var sum = Number(forsta) + Number(forsta)
alert(sum);

// Du får skriva in första och andra numret så får du en ruta med summan
var forsta = prompt("Skriv ditt första nummer");
var andra = prompt("Skriv ditt andra nummer");
var sum = Number(forsta) + Number(forsta)
alert("Summan är: " + sum);

// I JavaScript betyder slutet på en expression ";"

//Varibler kommer vara det man byter till senast
var a = true;
a = "Hello";

// Kommer inte fungera, kommer ge oss "undefined" för värdet är inte defingerat
var b; 

