const container = document.getElementById("details");

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const localDramas =
JSON.parse(localStorage.getItem("dramas")) || [];

const allDramas =
localDramas.length > 0 ? localDramas : dramas;

const item = allDramas.find(d => d.id === id);

if(!item){

container.innerHTML = `
<div style="padding:50px;text-align:center;">
<h1>❌ Drama Not Found</h1>
<a href="index.html" class="back-btn">
🏠 Back Home
</a>
</div>
`;

}else{

container.innerHTML = `

<div class="details-wrapper">

<div class="details-left">

<img src="${item.image}" alt="${item.title}">

</div>

<div class="details-right">

<h1>${item.title}</h1>

<div class="meta-grid">

<div>
<h4>⭐ Rating</h4>
<p>${item.rating || "N/A"}</p>
</div>

<div>
<h4>📅 Year</h4>
<p>${item.year || "N/A"}</p>
</div>

<div>
<h4>🎞 Episodes</h4>
<p>${item.episodes || "N/A"}</p>
</div>

<div>
<h4>🎭 Genre</h4>
<p>${item.genre || "N/A"}</p>
</div>

<div>
<h4>📡 Status</h4>
<p>${item.status || "N/A"}</p>
</div>

<div>
<h4>🌍 Country</h4>
<p>${item.country || "N/A"}</p>
</div>

</div>

<div class="desc-box">

<h2>📖 Story</h2>

<p>
${item.about || item.description || "No Description Available"}
</p>

</div>

<div class="extra-grid">

<div>
<strong>🎬 Director</strong>
<br>
${item.director || "Unknown"}
</div>

<div>
<strong>👥 Cast</strong>
<br>
${item.cast || "Unknown"}
</div>

</div>

<div style="display:flex;gap:10px;flex-wrap:wrap;">

<button class="back-btn"
onclick="toggleFavorite(${item.id})">
❤️ Favorite
</button>

<button class="back-btn"
onclick="toggleWatching(${item.id})">
📺 Watching
</button>

<button class="back-btn"
onclick="toggleCompleted(${item.id})">
✔ Completed
</button>

<a href="index.html"
class="back-btn">
🏠 Home
</a>

</div>

</div>

</div>

`;
}

/* ===========================
   FAVORITE
=========================== */

function updateDrama(id,key){

let dramas =
JSON.parse(localStorage.getItem("dramas")) || [];

const index =
dramas.findIndex(d=>d.id===id);

if(index !== -1){

dramas[index][key] =
!dramas[index][key];

localStorage.setItem(
"dramas",
JSON.stringify(dramas)
);

alert("Updated Successfully!");

}

}

function toggleFavorite(id){
updateDrama(id,"favorite");
}

function toggleWatching(id){
updateDrama(id,"watching");
}

function toggleCompleted(id){
updateDrama(id,"completed");
}