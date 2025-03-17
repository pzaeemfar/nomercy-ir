const urls = [
  "https://soundcloud.com/bahramnouraei/khoob",
  "https://soundcloud.com/alisorena/badhaye-vahshi-by-farshad",
  "https://soundcloud.com/bahramnouraei/lams",
  "https://soundcloud.com/emad-tajick/beshno",
  "https://soundcloud.com/divarrecords/majnoun",
  "https://soundcloud.com/user-172375438/ali-sorena-bezan-haroomi",
];

const tracks = document.querySelector("#tracks");
urls.forEach((url) => {
  const item = document.createElement("li");
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.textContent = url.split("/").pop();
  item.appendChild(link);

  tracks.appendChild(item);
});

const footerHeading = document.querySelector(".footer-heading");

const DATE = new Date("2025-03-17");
const currentDate = new Date();
const timeDifference = currentDate - DATE;
const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
footerHeading.innerHTML = `FUCK LIFE, DAY <b>#${daysPassed}</b>`;
