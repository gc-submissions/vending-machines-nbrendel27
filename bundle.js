(()=>{var e={420:e=>{e.exports={calculateChange:(e,t)=>t>=e?t-e:`Insufficient funds: $${Math.abs(e-t).toFixed(2)} due.`,isSufficientPayment:(e,t)=>e<=t,calculateTotal:e=>parseFloat(e.reduce(((e,t)=>e+t.price),0).toFixed(2)),addItem:(e,t,n)=>{const r={name:t,price:n};e.push(r)},removeItem:(e,t)=>{e.splice(t,1)}}},842:e=>{e.exports={formatCurrency:e=>e>=0?"$"+(e=Math.ceil(100*e)/100).toFixed(2):(e=Math.floor(100*e)/100,"-$"+Math.abs(e).toFixed(2)),getCoins:e=>{const t={quarters:0,dimes:0,nickels:0,pennies:0};for(;0!==e;)e>=25?(t.quarters++,e-=25):e>=10?(t.dimes++,e-=10):e>=5?(t.nickels++,e-=5):(t.pennies++,e-=1);return t}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}(()=>{let{formatCurrency:e,getCoins:t}=n(842);const{addItem:r,calculateTotal:i,isSufficientPayment:a,calculateChange:d,removeItem:c}=n(420);e=e||(e=>e);const o=[{name:"Candy Bar",price:.95},{name:"Bag of Chips",price:1.29},{name:"Can of Soda",price:1.8},{name:"Bottle of Milk",price:3},{name:"Box of Cherries",price:5.13}];!function(){const n=document.getElementById("menu"),s=document.getElementById("selectedItems"),u=document.getElementById("total"),m=document.getElementById("cashInput"),l=document.getElementById("cashForm"),f=document.getElementById("changeDue"),p=document.getElementById("cashInserted"),h=document.getElementById("paymentInsufficientMessage"),x=document.getElementById("change"),g=x.querySelectorAll(".change-count"),I=document.getElementById("resetButton");o.forEach(((t,r)=>{n.insertAdjacentHTML("beforeend",`<li>${e(t.price)} - ${t.name}\n        <button data-index="${r}">Buy</button>\n      </li>`)}));let y=[];function B(){s.innerHTML="",y.forEach(((t,n)=>{s.insertAdjacentHTML("beforeend",`<tr>\n        <td>${t.name}</td>\n        <td>${e(t.price)}</td>\n        <td><button data-index="${n}">Remove</button></td>\n      </tr>`)}));const t=i(y);u.innerText=e(t)}n.addEventListener("click",(e=>{const t=parseInt(e.target.getAttribute("data-index"));if(!isNaN(t)){const e=o[t];r(y,e.name,e.price),B()}})),s.addEventListener("click",(e=>{const t=parseInt(e.target.getAttribute("data-index"));isNaN(t)||(c(y,t),B())})),l.addEventListener("submit",(n=>{n.preventDefault();const r=Number(m.value)||0,c=i(y);let o=0;try{o=d(c,r)}catch(n){console.error(n)}if(p.innerText=e(r),f.innerText=e(o),a(c,r)){const e=t(Math.round(100*o));g[0].innerText=e.quarters,g[1].innerText=e.dimes,g[2].innerText=e.nickels,g[3].innerText=e.pennies,x.hidden=!1,h.hidden=!0}else x.hidden=!0,h.hidden=!1})),I.addEventListener("click",(()=>{y=[],B(),m.value="",p.innerText="",f.innerText="",x.hidden=!0,h.hidden=!0}))}()})()})();