console.log("Adivina el número :)");const n=document.querySelector(".js-inputText"),r=document.querySelector(".js-buttonSubmit"),o=document.querySelector(".js-txtAnswer"),a=document.querySelector(".js-txtNumberAttempts");function u(t){return Math.ceil(Math.random()*t)}const e=u(100);console.log(e);const s=t=>{t.preventDefault(),a.innterHTML=r.lenght,parseInt(n.value)===e?o.innerHTML="Enhorabuena campeona!!":parseInt(n.value)<e?o.innerHTML="Demasiado bajo":parseInt(n.value)>e&&(o.innerHTML="Demasiado alto")};r.addEventListener("click",s);
//# sourceMappingURL=main.js.map
