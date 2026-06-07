const container = document.getElementById("details");

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

let stored = JSON.parse(localStorage.getItem("dramas"));
const dramas = stored && stored.length ? stored : window.dramas;

const item = dramas.find(d => d.id === id);

if(!item){
  container.innerHTML = "<h2>Drama not found</h2>";
} else {
  container.innerHTML = `
  <div class="details-page">

    <div class="details-container">

      <img src="${item.image}" />

      <div class="details-info">

        <h1>${item.title}</h1>

        <div class="details-meta">
          <span class="details-badge">${item.category}</span>
          <span class="details-badge">⭐ ${item.rating}</span>
          <span class="details-badge">${item.year || ""}</span>
          <span class="details-badge">${item.status || ""}</span>
        </div>

        <p><b>Genre:</b> ${item.genre || "N/A"}</p>
        <p><b>Episodes:</b> ${item.episodes || "N/A"}</p>

        <p style="margin-top:15px;line-height:1.6;">
          ${item.about || item.description}
        </p>

      </div>

    </div>

  </div>
  `;
}