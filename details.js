const container = document.getElementById("details");

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

let dramas = JSON.parse(localStorage.getItem("dramas")) || [];

let item = dramas.find(d => d.id === id);

if(!item){
  container.innerHTML = "<h2 style='text-align:center;margin-top:50px'>❌ No Data Found</h2>";
}
else {
  container.innerHTML = `
  <div class="details-wrapper">

    <div class="details-left">
      <img src="${item.image}">
    </div>

    <div class="details-right">

      <h1>${item.title}</h1>

      <p>⭐ Rating: ${item.rating}</p>
      <p>📂 Category: ${item.category}</p>
      <p>${item.description}</p>

      <br>

      <a href="index.html" class="back-btn">⬅ Back</a>

    </div>

  </div>
  `;
}