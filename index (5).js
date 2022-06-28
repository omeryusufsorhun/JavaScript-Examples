const mass = document.querySelector('#mass')
  const height = document.querySelector('#height')
   const button = document.querySelector('button')
   let sonuc

button.addEventListener("click",()=>{
   
        sonuc=mass.value/height.value**2;
        console.log("your bmi is"+sonuc)
  
})