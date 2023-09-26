console.log("main.js is loaded");

let btnChange = document.querySelector('.change-btn');
btnChange.addEventListener('click', function (){
let fullName = document.querySelector('.fullname')
fullName.textContent = 'Jonah Mengsteab'
});

let slfChange = document.querySelector('.changeSelf');
slfChange.addEventListener('click', function(){
    let userInput = prompt('Type iets in: ');

    let fullName = document.querySelector('.fullname')
    fullName.textContent = userInput;


});