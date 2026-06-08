/* ===========================
   GEN Z HUB - FINAL SCRIPT
=========================== */

/* LOADER FIX */
window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader){

setTimeout(() => {

loader.style.opacity = "0";

setTimeout(() => {
loader.style.display = "none";
}, 300);

}, 500);

}

});

/* ELEMENTS */

const trendingList = document.getElementById("trendingList");
const latestList = document.getElementById("latestList");
const topList = document.getElementById("topList");
const recommendList = document.getElementById("recommendList");

const searchInput = document.getElementById("search");
const filterButtons = document.querySelectorAll(".menu-btn");

let currentFilter = "all";

/* GET DRAMAS */

function getDramas(){

let stored = JSON.parse(localStorage.getItem("dramas"));

if(stored && stored.length){
return stored;
}

return window.dramas || [];

}

/* CARD */

function createCard(item){

return `
<div class="card" onclick="openDetails(${item.id})">

<img src="${item.image}"
alt="${item.title}"
onerror="this.src='https://via.placeholder.com/1280x720?text=No+Image'">

<div class="card-content">

<h3>${item.title}</h3>

<div>

<span class="rating">
⭐ ${item.rating}
</span>

<span class="category">
${item.category}
</span>

</div>

<p>
${item.description || "No description available"}
</p>

</div>

</div>
`;

}

/* RENDER */

function render(){

const dramas = getDramas();

if(!dramas.length){

trendingList.innerHTML =
"<h3>No dramas found</h3>";

return;

}

let keyword = searchInput
? searchInput.value.toLowerCase()
: "";

let filtered = dramas.filter(item => {

let searchMatch =
item.title.toLowerCase().includes(keyword);

let categoryMatch =
currentFilter === "all" ||
item.category === currentFilter;

return searchMatch && categoryMatch;

});

/* TRENDING */

if(trendingList){

trendingList.innerHTML = "";

filtered
.slice(0,8)
.forEach(item => {

trendingList.innerHTML += createCard(item);

});

}

/* LATEST */

if(latestList){

latestList.innerHTML = "";

[...filtered]
.reverse()
.slice(0,8)
.forEach(item => {

latestList.innerHTML += createCard(item);

});

}

/* TOP */

if(topList){

topList.innerHTML = "";

[...filtered]
.sort(
(a,b)=>
parseFloat(b.rating) -
parseFloat(a.rating)
)
.slice(0,8)
.forEach(item => {

topList.innerHTML += createCard(item);

});

}

/* RECOMMENDED */

if(recommendList){

recommendList.innerHTML = "";

filtered
.sort(()=>0.5 - Math.random())
.slice(0,8)
.forEach(item => {

recommendList.innerHTML += createCard(item);

});

}

}

/* SEARCH */

if(searchInput){

searchInput.addEventListener(
"input",
render
);

}

/* FILTER */

filterButtons.forEach(btn => {

btn.addEventListener("click",()=>{

filterButtons.forEach(b =>
b.classList.remove("active")
);

btn.classList.add("active");

currentFilter =
btn.dataset.filter;

render();

});

});

/* DETAILS */

function openDetails(id){

window.location.href =
`details.html?id=${id}`;

}

/* BACK TO TOP */

const topBtn =
document.getElementById("topBtn");

if(topBtn){

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 300){

topBtn.style.display =
"block";

}else{

topBtn.style.display =
"none";

}

}
);

topBtn.addEventListener(
"click",
()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

}
);

}

/* INIT */

render();