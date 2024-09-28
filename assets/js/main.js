async function loadMedia() {
  const gistUrl =
    "https://api.github.com/gists/7ea01c8c359712d0a38aeebdadffad3c";
  const response = await fetch(gistUrl);
  const gist = await response.json();
  const links = getLinksFromGist(gist);

  const mediaGrid = document.getElementById("gallery");
  links.forEach((link) => addMediaToGrid(mediaGrid, link));
}

function getLinksFromGist(gist) {
  const content = gist.files["nomercy.ir.txt"].content;
  return content.split("\n").filter((link) => link.trim() !== "");
}

function addMediaToGrid(mediaGrid, link) {
  const div = document.createElement("div");
  const img = createImageElement(link);

  div.appendChild(img);
  mediaGrid.appendChild(div);
}

function createImageElement(link) {
  const img = document.createElement("img");
  img.src = link;
  img.className = "h-auto max-w-full rounded-lg";
  return img;
}

loadMedia();
