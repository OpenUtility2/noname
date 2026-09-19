(function(){
"use strict";
const key="mctools-theme", perfKey="mctools-performance";
function applyTheme(t){document.documentElement.dataset.theme=t;document.documentElement.classList.add("theme-ready");localStorage.setItem(key,t);const b=document.querySelector("[data-theme-current]");if(b)b.textContent=t[0].toUpperCase()+t.slice(1)}
function applyPerf(v){document.documentElement.classList.toggle("performance-mode",v);localStorage.setItem(perfKey,v?"1":"0");const b=document.querySelector("[data-perf-current]");if(b)b.textContent=v?"ON":"OFF"}
const saved=localStorage.getItem(key)||"ender";applyTheme(saved);applyPerf(localStorage.getItem(perfKey)==="1");
document.addEventListener("click",e=>{
 const t=e.target.closest("[data-theme-cycle]"); if(t){const a=["ender","dark","light"],i=a.indexOf(document.documentElement.dataset.theme);applyTheme(a[(i+1)%a.length]);}
 const p=e.target.closest("[data-performance-toggle]"); if(p)applyPerf(!document.documentElement.classList.contains("performance-mode"));
});
window.addEventListener("DOMContentLoaded",()=>{
 document.querySelectorAll("[data-theme-current]").forEach(b=>b.textContent=(document.documentElement.dataset.theme||"ender").toUpperCase());
 document.querySelectorAll("[data-perf-current]").forEach(b=>b.textContent=document.documentElement.classList.contains("performance-mode")?"ON":"OFF");
});
})();