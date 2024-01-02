// ---The functionality of the gallery--- //

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

var nextImage = document.getElementById("next");
var prevImage = document.getElementById("prev");

function openFullImg(pic) {
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}

function closeFullImg() {
  fullImgBox.style.display = "none";
}

// ---Create gallery--- //

// The images must be sequentially numbered, meaning the first image file should be named '1', the second '2', and so on with .jpg format.
// The variable 'numberOfImages' corresponds to the total number of images and should be updated with any changes in the number of images.

var numberOfImages = 37;

var container = document.getElementById("gallery");

for (var i = 1; i <= numberOfImages; i++) {
  var imgElement = document.createElement("img");

  imgElement.src = "./img/gallery/" + i + ".jpg";
  imgElement.alt = "pictures from work";
  imgElement.onclick = (function (currentIndex) {
    return function () {
      openFullImg("./img/gallery/" + currentIndex + ".jpg", currentIndex);
    };
  })(i);

  container.appendChild(imgElement);
}

var currentIndex = 1; // Local variable to track the current index

nextImage.onclick = function () {
  currentIndex = (currentIndex % numberOfImages) + 1;
  fullImgBox.style.display = "flex";
  fullImg.src = "./img/gallery/" + currentIndex + ".jpg";
};

prevImage.onclick = function () {
  currentIndex = ((currentIndex - 2 + numberOfImages) % numberOfImages) + 1;
  fullImgBox.style.display = "flex";
  fullImg.src = "./img/gallery/" + currentIndex + ".jpg";
};
