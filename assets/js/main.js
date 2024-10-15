const url =
  "https://gist.githubusercontent.com/pzaeemfar/16c59c223ea5a1efdcbbd3fe9a57fbef/raw/nomercy.ir.txt";

async function loadContent() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    const text = await response.text();
    document.getElementById("text").innerHTML = text.replace(/\n/g, "<br>");
  } catch (error) {
    console.error("Error loading the content:", error);
  }
}

loadContent();
