const getElements = () => {
  const nav = document.querySelector(".navbar");
  const menuBtn = document.querySelector("#menu-btn");

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    nav.classList.remove("active");
  });
};

const fetchHeader = async () => {
  try {
    const res = await fetch("../header.txt");
    const template = await res.text();
    const parse = new DOMParser();
    const html = parse.parseFromString(template, "text/html");
    const header = html.querySelector("body header");

    document.body.prepend(header);
  } catch (err) {
    console.log(err);
  }
};

const fetchFooter = async () => {
  try {
    const res = await fetch("../footer.txt");
    const template = await res.text();
    const parse = new DOMParser();
    const html = parse.parseFromString(template, "text/html");
    const footer = html.querySelector("body footer");

    document.body.append(footer);
  } catch (err) {
    console.log(err);
  }
};

fetchHeader().then(getElements);
fetchFooter();

// course 3 page

const mainVideoSection = document.querySelector(".main-video");
const allVideos = document.querySelectorAll(".box .video video");
const closeBtn = document.querySelector("#close-vid");

for (const video of allVideos) {
  video.addEventListener("click", () => {
    const src = video.getAttribute("src");
    mainVideoSection.querySelector("video").src = src;
    mainVideoSection.classList.add("active");
  });
}

closeBtn.addEventListener("click", () => {
  mainVideoSection.querySelector("video").src = "";
  mainVideoSection.classList.remove("active");
});
