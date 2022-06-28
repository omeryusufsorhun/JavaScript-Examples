let body = document.querySelector("body")
let div = document.querySelector("div")
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
for (let i = 0; i <= 100; i++) {
  
    if (isPrime(i) || i===2){
        let box = document.createElement("div")
        box.textContent = i;
        box.style.width = "150px";
        box.style.height = "120px";
        box.style.backgroundColor = "red"
        box.style.margin = "8px";
        div.appendChild(box)

    }
     else if(i%2!==0) {
        let box = document.createElement("div")
        box.textContent = i;
        box.style.width = "150px";
        box.style.height = "120px";
        box.style.backgroundColor = "yellow"
        box.style.margin = "8px";
        div.appendChild(box)
    }
    
    if (i % 2 === 0) {
        let box = document.createElement("div")
        box.textContent = i
        box.style.width = "150px";
        box.style.height = "120px"
        box.style.backgroundColor = "green"
        box.style.margin = "8px";
        div.appendChild(box)
    }
}


