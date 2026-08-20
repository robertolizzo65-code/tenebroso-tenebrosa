const btn=document.querySelector(".menu");const links=document.querySelector(".links");
btn.addEventListener("click",()=>links.classList.toggle("open"));
document.querySelectorAll(".links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));