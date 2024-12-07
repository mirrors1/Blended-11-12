import{a as l}from"./assets/vendor-a2e8d7fa.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i="https://dummyjson.com",a="/products";async function d(r=`${i}${a}`){const o=await l.get(r);return console.log(o.data.products),o.data.products}function u(r){return r.map(({id:o,title:n,description:s,price:e,thumbnail:t})=>`
        <li class="list__item" data-id="${o}">            
            <h2 class="list__title">${n}</h2>
            <img src="${t}" alt="${n}">
            <p>${s}</p>
            <p>${e} грн.</p>
        </li>
    `).join("")}const f=document.querySelector("#allProducts"),p=document.querySelector(".loadAllProducts");p.addEventListener("click",m);async function m(r){r.preventDefault();try{const o=await d();f.insertAdjacentHTML("beforeend",u(o))}catch(o){alert(o.message)}}
//# sourceMappingURL=commonHelpers.js.map
