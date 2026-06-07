function addDrama(){

let title = document.getElementById("title").value;
let category = document.getElementById("category").value;
let rating = document.getElementById("rating").value;
let image = document.getElementById("image").value;
let desc = document.getElementById("desc").value;

let dramas = JSON.parse(localStorage.getItem("dramas")) || [];

let newDrama = {
id: Date.now(),
title,
category,
rating,
image,
description: desc
};

dramas.push(newDrama);

localStorage.setItem("dramas", JSON.stringify(dramas));

alert("Drama Added Successfully!");

window.location.reload();

}