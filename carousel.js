// Array of image URLs
const images = [
    "https://static.wixstatic.com/media/3e231f_c8bf5858d17643c9a7d2bfdec1149d29~mv2.png",
    "https://static.wixstatic.com/media/3e231f_646dda40800d48a39ef124cf9fb2fbb8~mv2.png",
    "https://static.wixstatic.com/media/3e231f_c8bf5858d17643c9a7d2bfdec1149d29~mv2.png",
    "https://static.wixstatic.com/media/3e231f_c8bf5858d17643c9a7d2bfdec1149d29~mv2.png"
    // Add more images as needed
];

let currentIndex = 0;
const mainImage = document.getElementById("mainImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const thumbnailContainer = document.getElementById("thumbnailContainer");

// Function to update the main image
function updateMainImage() {https://github.com/anismahenthra/carousel-widget/blob/main/carousel.js#L4C32
    mainImage.src = images[currentIndex];
}

// Event listener for "prev" button
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateMainImage();
});

// Event listener for "next" button
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateMainImage();
});

// Function to change the main image when a thumbnail is clicked
function changeImage(imageUrl) {
    mainImage.src = imageUrl;
}
