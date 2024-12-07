import{a}from"./assets/vendor-a2e8d7fa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const i="https://dummyjson.com",l="/products";async function d(r=`${i}${l}`){const t=await a.get(r);return console.log(t.data.products),t.data.products}async function u(r){return(await a.get(`https://dummyjson.com/products/${r}`)).data}function f(r){return r.map(({id:t,title:s,description:n,price:e,thumbnail:o})=>`
        <li class="list__item" data-id="${t}">            
            <h2 class="list__title">${s}</h2>
            <img src="${o}" alt="${s}">
            <p>${n}</p>
            <p>${e} грн.</p>
        </li>
    `).join("")}function m({id:r,title:t,description:s,price:n,thumbnail:e}){return`
        <div class="list__item" data-id="${r}">            
            <h2 class="list__title">${t}</h2>
            <img src="${e}" alt="${t}">
            <p>${s}</p>
            <p>${n} грн</p>
        </div>
    `}const p=document.querySelector("#allProducts"),y=document.querySelector(".loadAllProducts");y.addEventListener("click",g);async function g(r){r.preventDefault();try{const t=await d();p.insertAdjacentHTML("beforeend",f(t))}catch(t){alert(t.message)}}const h=document.querySelector("#singleProductForm"),P=document.querySelector("#singleProduct");h.addEventListener("submit",$);async function $(r){r.preventDefault();const t=r.target.elements.id.value;try{const s=await u(t);P.insertAdjacentHTML("beforeend",m(s)),r.target.reset()}catch(s){alert(s.message)}}
//# sourceMappingURL=commonHelpers.js.map
