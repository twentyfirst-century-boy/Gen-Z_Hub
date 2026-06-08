const container = document.getElementById("details");

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

let localDramas =
JSON.parse(localStorage.getItem("dramas")) || [];

let allDramas =
localDramas.length ? localDramas : dramas;

const item = allDramas.find(
d => Number(d.id) === Number(id)
);

if(!item){

container.innerHTML = `
<div style="padding:50px;text-align:center;">
<h1>❌ Drama Not Found</h1>
<br>
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
⭐
<br>
${item.rating || "N/A"}
</div>

<div>
📅
<br>
${item.year || "N/A"}
</div>

<div>
🎞
<br>
${item.episodes || "N/A"}
</div>

<div>
🎭
<br>
${item.genre || "N/A"}
</div>

<div>
📡
<br>
${item.status || "N/A"}
</div>

<div>
🌍
<br>
${item.country || "N/A"}
</div>

</div>

<div class="desc-box">

<h2>📖 Story</h2>
<br>

<p>
${item.about || item.description || "No description available."}
</p>

</div>

<div class="extra-grid">

<div>
🎬 Director
<br><br>
${item.director || "N/A"}
</div>

<div>
👥 Cast
<br><br>
${item.cast || "N/A"}
</div>

<div>
🎭 Category
<br><br>
${item.category || "N/A"}
</div>

<div>
⭐ Rating
<br><br>
${item.rating || "N/A"}
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
✔️ Completed
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

/* FAVORITE */

function toggleFavorite(id){

let dramas =
JSON.parse(localStorage.getItem("dramas")) || [];

const drama =
dramas.find(d=>d.id===id);

if(drama){

drama.favorite = !drama.favorite;

localStorage.setItem(
"dramas",
JSON.stringify(dramas)
);

alert(
drama.favorite
? "❤️ Added to Favorites"
: "❌ Removed from Favorites"
);

}
}

/* WATCHING */

function toggleWatching(id){

let dramas =
JSON.parse(localStorage.getItem("dramas")) || [];

const drama =
dramas.find(d=>d.id===id);

if(drama){

drama.watching = !drama.watching;

localStorage.setItem(
"dramas",
JSON.stringify(dramas)
);

alert(
drama.watching
? "📺 Added to Watching"
: "❌ Removed from Watching"
);

}
}

/* COMPLETED */

function toggleCompleted(id){

let dramas =
JSON.parse(localStorage.getItem("dramas")) || [];

const drama =
dramas.find(d=>d.id===id);

if(drama){

drama.completed = !drama.completed;

localStorage.setItem(
"dramas",
JSON.stringify(dramas)
);

alert(
drama.completed
? "✔️ Marked Completed"
: "❌ Removed Completed"
);

}
}