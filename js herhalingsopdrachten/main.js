console.log("Het werkt");

//opdracht 1
let salary = 2000;
let raise = salary * .05;
console.log("Verhoging is €", raise);
let newSalary = salary + raise;


const ul = document.querySelector('.results')
ul.innerHTML += "<li> €" + newSalary + "</li>"

//opdracht 2
let price = 400000
let percantage = 0.025
let interest = price * percantage


ul.innerHTML += "<li> €" + interest + "</li>"

//opdracht 3 
price = 100
let result = price * 1.21
ul.innerHTML += "<li> €" + result + "</li>"

//opdracht 4
let person = prompt("Vul persoon in")

if (person === "Docent"){
    console.log("Jij bent een docent");
} 

else{
console.log("Jij bent gek!");
}


//opdracht 6
let counter = 0

while (counter < 10){
    
    console.log("counter is" ,counter);

     counter = counter + 1;
}

