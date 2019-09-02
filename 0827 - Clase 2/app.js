var estudiante={
    nombre:"Leonardo",
    curso:"Dh",
    dni:"32734258",
    email:"leonardo.strupeni@gmail.com",
}

function fromObjectToArray (obj){
    var resultado = [];
    for (const key in obj) {
        // console.log(obj[key]);
        resultado.push(obj[key]);
    }
    return resultado
}

var EstudianteArray=fromObjectToArray(estudiante);
console.log(EstudianteArray);

function cambiarColorDeFondoDelBody(color){
    body=document.querySelector('body');
    if(color=='green' || color=='#0f0' ||color=='#00ff00'){
        console.log(false);
    } else  {
        body.setAttribute("style","background:"+color);
        console.log(true);
    }
}

cambiarColorDeFondoDelBody('lightblue');
cambiarColorDeFondoDelBody('green');


var paragraph = document.querySelectorAll("p");
function paragraphchanges() {
    var noAfectados=0;
    for (var i = 0; i < paragraph.length; i++) {
        if(i%2==0){
        paragraph[i].style.color = "red";
        paragraph[i].style.fontWeight = "Bold" ;
        paragraph[i].style.textAlign = "center" ;
        } else {
        noAfectados++;
        }
    }
    console.log("Párrafos que no se vieron afectados: "+noAfectados);
  }

paragraphchanges();


// Ejercitacion Métodos de Array

var enigma = ["l", 1, "a", 2, 2, 5, "p", 5, 7, 5, 3, "e", 6,
"r", 7, 6, 5, 3, 2, 1, "s", 9, 9, 9, 6, "e", 2, "v", 5, "e", 3, "r",
2, "a", 1, 6, 4, 1, 2, "n", 2, "c", 3, 5, 5, 5, 7, "i", 4, "a", 5,
2, 1, 3, "e", 6, "s", 7, "l", 4, "a", 3, "c", 2, 3, 1, 5, 3, 2, "l",
3, "a", 4, "v", 5, "e", 6];

var altura=0;
var calle='';

enigma.forEach(function(num){
    if(Number(num)){
        altura = altura + num;
    }else{
        calle = calle + num;
    }
});

console.log(calle+": "+altura);






