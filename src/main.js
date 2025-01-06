const siteHeadingElem = document.querySelector("#site-heading");

const GITHUB_GIST_URL =
  "https://gist.githubusercontent.com/pzaeemfar/394270e79ab0996ba496b20e286e57bd/raw/";

try {
  const response = await fetch(GITHUB_GIST_URL);
  if (response.status == 200) {
    window.location.href = await response.text();
  }
} catch (error) {
  siteHeadingElem.textContent =
    "Redirection failed. Please refresh the page to try again. 😔 If the issue persists, kindly notify the administrator, @pzaeemfar.";
}
