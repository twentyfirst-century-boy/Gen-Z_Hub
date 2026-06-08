function addDrama(){

const title = document.getElementById("title").value.trim();
const category = document.getElementById("category").value.trim();
const rating = document.getElementById("rating").value.trim();
const image = document.getElementById("image").value.trim();

const year = document.getElementById("year").value.trim();
const episodes = document.getElementById("episodes").value.trim();
const genre = document.getElementById("genre").value.trim();
const status = document.getElementById("status").value.trim();

const country = document.getElementById("country").value.trim();
const director = document.getElementById("director").value.trim();
const cast = document.getElementById("cast").value.trim();

const description = document.getElementById("desc").value.trim();
const about = document.getElementById("about").value.trim();

/* Required Fields Check */
if(
!title ||
!category ||
!rating ||
!image
){
alert("Please fill Title, Category, Rating and Image URL.");
return;
}

/* Get Existing Data */
let dramas =
JSON.parse(localStorage.getItem("dramas")) || [];

/* Create Drama Object */
const newDrama = {

id: Date.now(),

title,
category,
rating,
image,

description,

year,
episodes,
genre,
status,

country,
director,
cast,

about,

favorite:false,
watching:false,
completed:false,

createdAt:new Date().toISOString()

};

/* Save */
dramas.push(newDrama);

localStorage.setItem(
"dramas",
JSON.stringify(dramas)
);

alert("🎉 Drama Added Successfully!");

/* Clear Form */

document.getElementById("title").value = "";
document.getElementById("category").value = "";
document.getElementById("rating").value = "";
document.getElementById("image").value = "";

document.getElementById("year").value = "";
document.getElementById("episodes").value = "";
document.getElementById("genre").value = "";
document.getElementById("status").value = "";

document.getElementById("country").value = "";
document.getElementById("director").value = "";
document.getElementById("cast").value = "";

document.getElementById("desc").value = "";
document.getElementById("about").value = "";

}