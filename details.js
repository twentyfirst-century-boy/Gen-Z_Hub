const container = document.getElementById("details");

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const stored = JSON.parse(localStorage.getItem("dramas")) || [];

const item = stored.find(d => d.id === id);

if (!item) {
  container.innerHTML = "<h2 style='text-align:center'>Drama Not Found</h2>";
} else {
  container.innerHTML = `
  
  <div class="details-wrapper">

    <div class="details-left">
      <img src="${item.image}" alt="${item.title}">
    </div>

    <div class="details-right">

      <h1>${item.title}</h1>

      <div class="meta-grid">
        <div><b>⭐ Rating</b><p>${item.rating}</p></div>
        <div><b>📂 Category</b><p>${item.category}</p></div>
        <div><b>🆔 ID</b><p>${item.id}</p></div>
      </div>

      <div class="desc-box">
        <h3>Description</h3>
        <p>${item.description}</p>
      </div>

      <div class="extra-grid">
        <div>🔥 Trending: Yes</div>
        <div>🎬 Type: Drama / Movie</div>
        <div>📺 Status: Available</div>
        <div>🌟 Language: Multi</div>
      </div>

      <a href="index.html" class="back-btn">⬅ Back</a>

    </div>

  </div>

  `;
}