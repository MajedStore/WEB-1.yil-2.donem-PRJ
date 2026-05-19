
const menu=document.getElementById("menu");
const toggle=document.querySelector(".nav-toggle");

if(toggle){
toggle.onclick=()=>menu.classList.toggle("open");
}

const cart=JSON.parse(localStorage.getItem("cart"))||[];

document.querySelectorAll("[data-add]").forEach(btn=>{
btn.onclick=()=>{
cart.push({
name:btn.dataset.name,
price:btn.dataset.price
});

localStorage.setItem("cart",JSON.stringify(cart));

alert("Urun sepete eklendi");
};
});

const table=document.getElementById("cartTable");

if(table){
let total=0;

cart.forEach(item=>{
total+=Number(item.price);

table.innerHTML+=`
<tr>
<td>${item.name}</td>
<td>${item.price} TL</td>
</tr>
`;
});

document.getElementById("total").innerText=total+" TL";
}

localStorage.removeItem("cart");