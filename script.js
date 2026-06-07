/* ===========================
   GEN Z HUB - MAIN SCRIPT
=========================== */

const trendingList = document.getElementById("trendingList");
const latestList = document.getElementById("latestList");
const topList = document.getElementById("topList");

const searchInput = document.getElementById("search");
const filterButtons = document.querySelectorAll(".menu-btn");

let currentFilter = "all";

/* ===========================
   LOADER
=========================== */

window.addEventListener("load", () => {

setTimeout(() => {

const loader = document.getElementById("loader");

if(loader){
loader.style.opacity = "0";
setTimeout(()=> loader.style.display="none", 500);
}

},1000);

});

/* ===========================
   CARD HTML
=========================== */

function createCard(item){

return `
<div class="card" onclick="openDetails(${item.id})">

<img src="${item.image}"
onerror="this.src='https://via.placeholder.com/300x450?text=No+Image'"
alt="${item.title}">

<div class="card-content">

<h3>${item.title}</h3>

<div>
<span class="rating">⭐ ${item.rating}</span>
<span class="category">${item.category}</span>
</div>

<p>${item.description.substring(0,90)}...</p>

<!-- 🗑 DELETE BUTTON (ONLY IF ADMIN PAGE USES SAME SCRIPT) -->
<button onclick="event.stopPropagation(); deleteDrama(${item.id})" class="del-btn">
🗑 Delete
</button>

</div>
</div>
`;
}

/* ===========================
   RENDER FUNCTION
=========================== */

function render(){

if(typeof dramas === "undefined") return;

let keyword = searchInput.value.toLowerCase();

let filtered = dramas.filter(item=>{

let matchSearch = item.title.toLowerCase().includes(keyword);

let matchCategory =
currentFilter === "all" || item.category === currentFilter;

return matchSearch && matchCategory;

});

/* Trending */
trendingList.innerHTML = "";
filtered.slice(0,8).forEach(item=>{
trendingList.innerHTML += createCard(item);
});

/* Latest */
latestList.innerHTML = "";
[...filtered].reverse().slice(0,8).forEach(item=>{
latestList.innerHTML += createCard(item);
});

/* Top Rated */
topList.innerHTML = "";
[...filtered]
.sort((a,b)=>parseFloat(b.rating)-parseFloat(a.rating))
.slice(0,8)
.forEach(item=>{
topList.innerHTML += createCard(item);
});

}

/* ===========================
   SEARCH
=========================== */

searchInput.addEventListener("input", render);

/* ===========================
   FILTER
=========================== */

filterButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

filterButtons.forEach(b=>b.classList.remove("active"));
btn.classList.add("active");

currentFilter = btn.dataset.filter;

render();

});

});

/* ===========================
   DETAILS PAGE
=========================== */

function openDetails(id){
window.location.href = `details.html?id=${id}`;
}

/* ===========================
   DELETE FUNCTION
=========================== */

function deleteDrama(id){

let dramas = JSON.parse(localStorage.getItem("dramas")) || [];

dramas = dramas.filter(item => item.id !== id);

localStorage.setItem("dramas", JSON.stringify(dramas));

alert("🗑 Drama Deleted!");

render();

}

/* ===========================
   BACK TO TOP
=========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){
topBtn.style.display = "block";
}else{
topBtn.style.display = "none";
}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

/* ===========================
   INIT
=========================== */

render();