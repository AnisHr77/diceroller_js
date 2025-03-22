const increment = document.getElementById('incrementer');
const decrementer = document.getElementById('decrementer');
const refrech = document.getElementById('refrech');
counter=document.getElementById('num');
let count = 0 ;

increment.onclick = function () {
    count++;
    counter.textContent = count;
}
refrech.onclick = function () {
    count=0;
    counter.textContent = count;
}
decrementer.onclick = function () {
    count--;
    counter.textContent = count;
}