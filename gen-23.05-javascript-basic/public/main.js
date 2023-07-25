const mainImage = document.getElementById("main-image");
const imageGrid = document.getElementById("image-grid");
imageGrid.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    const clickedImageUrl = event.target.getAttribute("src");
    mainImage.querySelector("img").setAttribute("src", clickedImageUrl);
  }
});
