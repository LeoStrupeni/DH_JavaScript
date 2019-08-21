var dato1="Contengo un String";
var dato2=["datoA","datoB"];
var dato3=true;
var dato4=[];

function impares(){
    for(i=1;i<=137;i=i+2){
        dato4.push(i);  
    }
    return dato4;
}

impares();

console.log(dato1);
console.log(dato2);
console.log(dato3);
console.log(dato4);


function aleatorio(){
    return Math.floor(Math.random() * (3 - 0) + 0);
}

var ironMan={
    nombre:"Iron Man",
    equipo:"Avengers",
    poderes:["Volar", "Lanzar misiles", "Disparar láser"],
    energia:100,
    getPoder: function (num){
        if(num==0){
            this.energia=this.energia-10
        } else if (num==1){
            this.energia=this.energia-15
        } else {
            this.energia=this.energia-25
        }
        return this.poderes[num];
    },
}

var hulk={
    nombre:"Hulk",
    equipo:"Avengers",
    poderes:["Aplastar", "Gritar", "Golpear"],
    energia:100,
    getPoder: function (num){
        if(num==0){
            this.energia=this.energia-5
        } else if (num==1){
            this.energia=this.energia-25
        } else {
            this.energia=this.energia-10
        }
        return this.poderes[num];
    },
}

console.log(ironMan.getPoder(aleatorio()));

console.log(ironMan.energia);

console.log(hulk.getPoder(aleatorio()));

console.log(hulk.energia);


var misDatos = {
    nombre:"Leo",
    apellido:"Strupeni",
    dni:32734258,
    comidaFavorita:"Pollo",
    edad:32,
    saludar: function(){
        return "Hola mi nombre es "+this.nombre+" "+this.apellido+" y tengo "+this.edad+" años"
    },
}

for (dato in misDatos) {
    console.log(dato+": "+misDatos[dato]);
}

console.log(misDatos.saludar());



var botonDePrueba=document.getElementById("miBoton");

botonDePrueba.onclick = function(){alert("Testeando el click")}


