let currentImageIndex = 0;
const images = [
    "https://static.wixstatic.com/media/3e231f_c8bf5858d17643c9a7d2bfdec1149d29~mv2.png",
    "https://static.wixstatic.com/media/3e231f_646dda40800d48a39ef124cf9fb2fbb8~mv2.png",
    "https://static.wixstatic.com/media/3e231f_c8bf5858d17643c9a7d2bfdec1149d29~mv2.png",
    "https://static.wixstatic.com/media/3e231f_646dda40800d48a39ef124cf9fb2fbb8~mv2.png",
    "https://static.wixstatic.com/media/3e231f_c8bf5858d17643c9a7d2bfdec1149d29~mv2.png",
    "https://static.wixstatic.com/media/3e231f_646dda40800d48a39ef124cf9fb2fbb8~mv2.png"
];

const mainImage = document.getElementById("mainImage");
const thumbnails = document.getElementById("thumbnails");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

function changeImage(imageSrc) {
    mainImage.src = imageSrc;
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    mainImage.src = images[currentImageIndex];
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    mainImage.src = images[currentImageIndex];
}

function scrollThumbnails(direction) {
    const thumbnailsContainer = document.querySelector('.thumbnails-container');
    const scrollAmount = 200;
    if (direction === 'next') {
        thumbnailsContainer.scrollBy(scrollAmount, 0);
    } else if (direction === 'prev') {
        thumbnailsContainer.scrollBy(-scrollAmount, 0);
    }
}

prevButton.addEventListener("click", function() {
    showPrevImage();
    scrollThumbnails('prev');
});

nextButton.addEventListener("click", function() {
    showNextImage();
    scrollThumbnails('next');
});
