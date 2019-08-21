var menu=document.getElementById('titular');
menu.style.display = "none";

var lechuza=document.querySelector('#lechuza');
lechuza.style.filter = "grayscale(100%)";

var copyright=document.getElementById('copyright');
console.log(copyright);

var h2=document.querySelector('h2');
h2.style.color = "red";

var icono=document.querySelectorAll('.icon');
for (var i = 0; i < icono.length; i++) {
    icono[i].style.color = "blue";
}

console.log(copyright.attributes);

console.log(copyright.getAttribute('id'));

var icoHiper=document.querySelectorAll('a.icon');

icoHiper[2].setAttribute('href','https://www.youtube.com/channel/UCKkPOtW8gQPgIUaxF4Og7PA');

for (var i = 0; i < icoHiper.length; i++) {
    console.log(icoHiper[i].getAttribute('href'));
}

var form=document.querySelector('.formulario');
console.log(form.attributes);
console.log(form.hasAttribute('action'));
var action=(form.getAttribute('url'));
console.log(form.removeAttribute('url'));
console.log(form.setAttribute('action',action));
console.log(form.attributes);
console.log(form.hasAttribute('action'));
console.log(form.getAttribute('action'));