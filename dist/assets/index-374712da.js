(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c=document.getElementById("days"),d=document.getElementById("hours"),u=document.getElementById("minutes"),m=document.getElementById("seconds"),y=document.getElementById("days-overlay"),g=document.getElementById("hours-overlay"),h=document.getElementById("minutes-overlay"),p=document.getElementById("seconds-overlay");let a;const T=new Date().getTime();localStorage.getItem("target-date")?a=localStorage.getItem("target-date")<=T?alert("Terminado, elija una nueva fecha"):JSON.parse(localStorage.getItem("target-date")):(a=new Date("2023-12-07T00:08:00"),localStorage.setItem("target-date",JSON.stringify(a.getTime())));function I(){const s=new Date().getTime(),n=a-s;if(n<=0)alert("Terminadoo"),clearInterval(f);else{let o=Math.floor(n/1e3),r=Math.floor(o/60),e=Math.floor(r/60),t=Math.floor(e/24);c.innerText=t,d.innerText=e%24,u.innerText=r%60,m.innerText=o%60,y.innerText=t,g.innerText=e%24,h.innerText=r%60,p.innerText=o%60}}I();function v(){const s=new Date().getTime(),n=a-s;if(n<=0)alert("Terminadoo"),clearInterval(f);else{let o=Math.floor(n/1e3),r=Math.floor(o/60),e=Math.floor(r/60),t=Math.floor(e/24);e=e%24,r=r%60,o=o%60,i(t,c),i(e,d),i(r,u),i(o,m)}}function i(s,n){if(parseInt(n.innerText)!=s){const o=n.parentElement.nextElementSibling;n.id!="seconds"&&(o.style="animation-delay: 0s"),n.innerText=s,o.firstElementChild.innerText=s,o.classList.add("active"),n.id!="seconds"&&setTimeout(()=>{o.classList.remove("active")},950)}}const f=setInterval(v,1e3);