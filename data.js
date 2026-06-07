let defaultDramas = [
{
  id: 1,
  title: "Hidden Love",
  category: "C-Drama",
  rating: "9.7",
  image: "https://graph.org/file/b0aa2135f5b872d6ff3f3-03732df180ff0a4bbe.jpg",
  description: "A romantic story about love and emotions."
}
];

let stored = JSON.parse(localStorage.getItem("dramas"));

const dramas = stored && stored.length ? stored : defaultDramas;