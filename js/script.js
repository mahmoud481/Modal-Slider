const imgList = document.getElementsByClassName("img-item");
const lightLayer = document.getElementById("light-layer");
const lightBoxItem = document.querySelector(".light-box-item");
const next = document.getElementById("next");
const close = document.getElementById("close");
const prev = document.getElementById("prev");
let imgArray = [];
let currentSlideIndex = 0; // rakm elsora elly 3liha eldor

for (let i = 0; i < imgList.length; i++) {
  //convert The HTML collecton To Array
  imgArray.push(imgList[i]);
  // Display Current Image
  imgArray[i].addEventListener("click",(e)=> {
    currentSlideIndex = imgArray.indexOf(e.target);
    lightLayer.style.display = "flex";
    let imgSrc = e.target.getAttribute("src");
    lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";
  });
}
// Display Next Image
function nextSlide() {
  currentSlideIndex++; // rakm elsora elly 3liha eldor
  if (currentSlideIndex == imgArray.length) {
    currentSlideIndex = 0;
  }
  lightBoxItem.style.backgroundImage =
    "url(" + imgArray[currentSlideIndex].getAttribute("src") + ")";
}
next.addEventListener("click", nextSlide);

// Display Previous Image
function prevSlide() {
  currentSlideIndex--; // rakm elsora elly 3liha eldor
  if (currentSlideIndex < 0) {
    currentSlideIndex = imgArray.length - 1;
  }
  lightBoxItem.style.backgroundImage =
    "url(" + imgArray[currentSlideIndex].getAttribute("src") + ")";
}
prev.addEventListener("click", prevSlide);

// Close Slider
function closeSild() {
  lightLayer.style.display = "none";
}
close.addEventListener("click", closeSild);

// Slide with Keyboard
document.body.addEventListener("keydown", function (e) {
  if (e.keyCode == 39) {
    nextSlide();
  } else if (e.keyCode == 37) {
    prevSlide();
  } else if (e.keyCode == 27) {
    closeSild();
  }
});