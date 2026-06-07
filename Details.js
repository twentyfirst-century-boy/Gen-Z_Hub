/* ===========================
   GEN Z HUB DETAILS PAGE
=========================== */

const container = document.getElementById("detailsContainer");

/* Get ID from URL */
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

/* Find item */
const item = dramas.find(d => d.id === id);

/* If not found */
if (!item) {
container.innerHTML = `
<div style="text-align:center;padding:80px 20px;">
<h1>❌ Content Not Found</h1>
<p style="color:#aaa;margin-top:10px;">The movie or drama you are looking for does not exist.</p>

<a href="index.html" style="
display:inline-block;
margin-top:20px;
padding:12px 25px;
background:linear-gradient(90deg,#4f7cff,#a855f7);
color:#fff;
border-radius:30px;
text-decoration:none;
">
⬅ Go Back Home
</a>

</div>
`;
} else {

/* Render Details */

container.innerHTML = `
<div class="details-container">

<img src="${item.image}" alt="${item.title}">

<div class="details-info">

<h1>${item.title}</h1>

<div class="details-meta">

<span class="details-badge">⭐ ${item.rating}</span>
<span class="details-badge">${item.category}</span>
<span class="details-badge">${item.genre}</span>
<span class="details-badge">${item.year}</span>

</div>

<p>${item.description}</p>

<div class="details-buttons">

<a class="watch-btn" href="${item.watch}" target="_blank">
▶ Watch Now
</a>

<a class="back-btn" href="index.html">
⬅ Back Home
</a>

</div>

</div>

</div>
`;
}