let defaultDramas = [
{
id:1,
title:"Hidden Love",
category:"C-Drama",
rating:"9.7",
image:"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
description:"A romantic story"
}
];

let stored = JSON.parse(localStorage.getItem("dramas"));

const dramas = stored && stored.length ? stored : defaultDramas;