var campoNombre = document.querySelector('input[name=nombre]');
var campoEmail = document.querySelector('input[name=email]');
var campoPaises = document.querySelector('select[name=paises]');
var elFormulario = document.querySelector('.theform');

console.log(campoPaises);

fetch('https://dev.digitalhouse.com/api/getProvincias')
    .then(function(response){
        return response.json();
    })
    .then(function(paises){
        paises.data.forEach(function(pais){
            var option = document.createElement('option');
            var optionText = document.createTextNode(pais.state);
            option.append(optionText);
            campoPaises.append(option);
        })
    })
    .catch(function (error) { 
        console.error(error);
    });


var losElementosDelFormulario = elFormulario.elements;

// ambas funciones de abajo devuelven lo mismo

losElementosDelFormulario[0].onchange = function(){
    console.log(this.value);
}

campoNombre.onchange = function(){
    console.log(this.value);
}

console.log(campoPaises.options);
console.log(losElementosDelFormulario[2].options);


campoPaises.onchange = function(){
    console.log(this.selectedindex);
}

campoPaises.onchange = function(){
    console.log(this.options[this.selectedindex]);
}

campoPaises.onchange = function(){
    console.log(this.options[this.selectedindex].value);
}


campoNombre.onfocus= function(){
    console.log('Hiciste foco en el campo Nombre');
}

campoNombre.onblur= function(){
    if(this.value.trim() == ''){
        alert('El Campo nombre no puede estar vacio');
    } else if (this.value.length < 3){
        alert('Debes ingresar mas de 3 letras');
    } 
}

campoEmail.onfocus= function(){
    console.log('Hiciste foco en el campo Email');
}

campoEmail.onchange= function(){
    console.log('Editaste el campo Email');
}

var regexMail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/;


campoEmail.onblur= function(){
    if(this.value.trim() == ''){
        alert('El Campo email no puede estar vacio');
    } else if (!regexMail.test(this.value)) {
        alert('El Campo email no tiene formato valido');
    }
}

elFormulario.onsubmit = function(event){
    if(campoNombre.value.trim() == ''){
        alert('El Campo nombre es Obligatorio');
        event.preventDefault();
    } 
    if(campoEmail.value.trim() == ''){
        alert('El Campo email es Obligatorio');
        event.preventDefault();
    } 

}


