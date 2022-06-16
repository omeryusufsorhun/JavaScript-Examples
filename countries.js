var btn=document.querySelector("#changeText");
var div=document.querySelector("div");

btn.addEventListener("click",function(){// butona tıklandığında div etiketinin yazısı butona tıklandi yazar.
    div.textContent="butona tıklandı";
});

var baslik=document.querySelector("h1");

baslik.addEventListener("click",function(){//h1 başlığına tıklandığında rengi kırmızı olur.
    baslik.style.color="red";

});