var mjsInicio="Quieres evaluar los gastos?";
var mjsInicioNegativo="Gracias por haber venido";
var mjsCantPeople="Cuantos integrantes tiene su familia?";
var mjsNombre="Ingrese el nombre de un integrante";
var mjsGastos="Cuanto gasto?";

var inicio=confirm(mjsInicio);

if (inicio == true) {
    var integrantes = [];
    var people = prompt(mjsCantPeople);
    
    while(isNaN(people) || people<3){
        alert("debe ingresar un numero mayor a 3");
        var people = prompt(mjsCantPeople);
    }

    for(var i = 1; i<=people; i++){
        
        var nombre=prompt(mjsNombre);

        while((nombre.trim()).length<0){
            alert("Debe ingresar un nombre valido");
            var nombre=prompt(mjsNombre);
        }

        var gastos=prompt(mjsGastos);

        while(isNaN(gastos)){
            alert("Debe ingresar un numero valido");
            var gastos=prompt(mjsGastos);
        }
        gastos=Number(gastos);
        integrantes.push({ Nombre: nombre, Gasto: gastos });
    }


} else {
    alert(mjsInicioNegativo);
    // window.location="http://www.netflix.com";
}

console.log(integrantes);

// Practica D.O.M - 2

var elementh1 = document.createElement('h1');
var textoh1= document.createTextNode('Reporte de gastos familiares');
elementh1.append(textoh1);

var body = document.querySelector('body');
body.append(elementh1);

var lista = document.createElement('ul');

var mayor=0;
var nombreMay='';
var menor=integrantes[0].Gasto;
var nombreMen=integrantes[0].Nombre;
var totalGasto=0;

for (var i=0;i<integrantes.length;i++){
    if(mayor<integrantes[i].Gasto){
        mayor=integrantes[i].Gasto;
        nombreMay=integrantes[i].Nombre;
    }
    if(menor>integrantes[i].Gasto){
        menor=integrantes[i].Gasto;
        nombreMen=integrantes[i].Nombre;
    }
    totalGasto=totalGasto+integrantes[i].Gasto;
}
var promeGasto=totalGasto/integrantes.length;


var opcMay = document.createElement('li');
var textoopcMay = document.createTextNode("Gasto Mayor - "+nombreMay+": $"+mayor);
opcMay.setAttribute("title","Gasto Mayor - "+nombreMay+": $"+mayor);
opcMay.append(textoopcMay);
body.append(opcMay);

var opcMen = document.createElement('li');
var textoopcMen = document.createTextNode("Gasto Menor - "+nombreMen+": $"+menor);
opcMen.setAttribute("title","Gasto Menor - "+nombreMen+": $"+menor);
opcMen.append(textoopcMen);
body.append(opcMen);

var opcTot = document.createElement('li');
var textoopcTot = document.createTextNode("Gasto Total : $"+totalGasto);
opcTot.setAttribute("title","Gasto Total : $"+totalGasto);
opcTot.append(textoopcTot);
body.append(opcTot);

var opcProm = document.createElement('li');
var textoopcProm = document.createTextNode("Gasto Promedio : $"+promeGasto);
opcProm.setAttribute("title","Gasto Promedio : $"+promeGasto);
opcProm.append(textoopcProm);
body.append(opcProm);

// Practica D.O.M - ejercicio 3

var button = document.createElement('button');
var textButton = document.createTextNode("¿Nos pasamos del presupuesto?");
button.setAttribute("type","submit");
button.append(textButton);
body.append(button);

var mjsoculto = document.createElement('p');
var textmjsoculto = document.createTextNode("Evalua si el gasto fue superior al presupuesto diario");
mjsoculto.style.display="none";
mjsoculto.append(textmjsoculto);
body.append(mjsoculto);

button.onmouseover = function () {
    var parafo=document.querySelector('p');
    parafo.style.display="block";
}

button.onmouseout = function(){
    var parafo=document.querySelector('p');
    setTimeout(parafo.style.display="none",3000);
}

button.onclick = function () {
    if(totalGasto>1200){
        alert("Nos pasamos del Presupuesto diario");
    } else {
        alert("No sobrepasamos el Presupuesto diario");
    }
}   

var br = document.createElement('br');
body.append(br);

// Practica D.O.M - ejercicio 6

var button2 = document.createElement('button');
var textButton2 = document.createTextNode("Modificar tema");
button2.setAttribute("type","submit");
button2.append(textButton2);
body.append(button2);

button2.onclick = function () {
    if(body.hasAttribute("class")){
        body.removeAttribute("class");
    } else {
        body.setAttribute("class","dark-theme");
    }
} 