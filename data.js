/* ===========================
   GEN Z HUB - DATA FILE
=========================== */

/* Default Data */
let defaultDramas = [
{
id: 1,
title: "Hidden Love",
category: "C-Drama",
rating: "9.7",
image: "https://graph.org/file/b0aa2135f5b872d6ff3f3-03732df180ff0a4bbe.jpg",
description: "A romantic story"
},
{
id: 2,
title: "Extra Drama",
category: "K-Drama",
rating: "9.1",
image: "https://via.placeholder.com/300x450",
description: "Sample drama for UI test"
}
];

/* Load from localStorage safely */
let stored = [];

try {
stored = JSON.parse(localStorage.getItem("dramas")) || [];
} catch (e) {
stored = [];
}

/* FINAL DRAMAS (SAFE MERGE) */
const dramas = stored.length > 0 ? stored : defaultDramas;