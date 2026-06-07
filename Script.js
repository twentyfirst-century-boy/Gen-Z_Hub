/* ===========================
   GEN Z HUB
   Main Script
=========================== */

const trendingList = document.getElementById("trendingList");
const latestList = document.getElementById("latestList");
const topList = document.getElementById("topList");

const searchInput = document.getElementById("search");
const filterButtons = document.querySelectorAll(".menu-btn");

let currentFilter = "all";

/* Loader */

window.addEventListener("load", () => {

setTimeout(() => {

const loader = document.getElementById("loader");

if(loader){
loader.style.opacity = "0";

setTimeout(()=>{
loader.style.display="none";
},500);

}

},1000);

});

/* Card */

function createCard(item){

return `

<div class="card" onclick="openDetails(${item.id})">

<img src="${item.image}" alt="${item.title}">

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

${item.description.substring(0,90)}...

</p>

</div>

</div>

`;

}

/* Render */

function render(){

if(typeof dramas==="undefined") return;

let keyword = searchInput.value.toLowerCase();

let filtered = dramas.filter(item=>{

let matchSearch = item.title
.toLowerCase()
.includes(keyword);

let matchCategory =
currentFilter==="all"
|| item.category===currentFilter;

return matchSearch && matchCategory;

});

trendingList.innerHTML="";
latestList.innerHTML="";
topList.innerHTML="";

filtered.forEach((item,index)=>{

if(index<8){

trendingList.innerHTML+=createCard(item);

}

});

[...filtered]
.reverse()
.slice(0,8)
.forEach(item=>{

latestList.innerHTML+=createCard(item);

});

[...filtered]
.sort((a,b)=>parseFloat(b.rating)-parseFloat(a.rating))
.slice(0,8)
.forEach(item=>{

topList.innerHTML+=createCard(item);

});

}

/* Search */

searchInput.addEventListener("input",render);

/* Filter */

filterButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

filterButtons.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

currentFilter=btn.dataset.filter;

render();

});

});

/* Details Page */

function openDetails(id){

window.location.href=`details.html?id=${id}`;

}

/* Back To Top */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* Initial Render */

render();