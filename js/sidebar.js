(function () {
  let imageIndex = 0;
  let artImages = [];
  let sideBarImages = [];
  let staticImageElement;

  function getImagesSrc() {
    let artImages = [];
    let imagesElement = document.querySelectorAll(".sidebar-bg__image img");
    imagesElement.forEach(function (img) {
      artImages.push(img.currentSrc);
    });
    return artImages;
  }

  function addListenerOnTextSection() {
    let textSectionList = document.querySelectorAll(".text-section");
    textSectionList.forEach((textSection, index) => {
      textSection.addEventListener("mouseenter", function (event) {
        changeStaticImageSrc(artImages[index % artImages.length]);
        addActiveClass(sideBarImages[index % artImages.length], index % artImages.length)
      }, false);
    });
  }

  function changeStaticImageSrc(src) {
    staticImageElement.src = src;
  }

  function addActiveClass(sideBarImageElement, index) {
    sideBarImages.forEach(sideBarImage => {
      sideBarImage.classList.remove("is-active");
    });
    sideBarImages[index].classList.add("is-active");
  }

  window.onload = function () {
    staticImageElement = document.querySelector(".sidebar-bg__image-static img");
    sideBarImages = document.querySelectorAll(".sidebar-bg__image");
    artImages = getImagesSrc();
    changeStaticImageSrc(artImages[0]);
    addListenerOnTextSection();
  }
})();


