let cart=JSON.parse(localStorage.getItem("cart"))||[];
let menuButton=document.getElementById("menuButton");
let menu=document.getElementById("menu");

if(menuButton){
  menuButton.onclick=function(){
    menu.classList.toggle("show");
  };
}

document.querySelectorAll("[data-add]").forEach(function(btn){
  btn.onclick=function(){
    cart.push({
      name:btn.dataset.name,
      price:Number(btn.dataset.price)
    });
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("Urun sepete eklendi");
  };
});

let table=document.getElementById("cartTable");
if(table){
  let total=0;
  cart.forEach(function(item){
    total+=item.price;
    table.innerHTML+="<tr><td>"+item.name+"</td><td>"+item.price+" TL</td></tr>";
  });
  document.getElementById("total").innerHTML=total+" TL";
}

let form=document.getElementById("contactForm");
if(form){
  form.onsubmit=function(e){
    e.preventDefault();
    document.getElementById("note").innerHTML="Mesaj alindi.";
  };
}
