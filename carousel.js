// Image URLs for the 1st and 2nd images
const image1 = "https://static.wixstatic.com/media/3e231f_c8bf5858d17643c9a7d2bfdec1149d29~mv2.png";
const image2 = "https://static.wixstatic.com/media/3e231f_646dda40800d48a39ef124cf9fb2fbb8~mv2.png";

// Create an array of 20 images, alternating between image1 and image2
const images = [];
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        images.push(image1);  // Add image1 for even indexes
    } else {
        images.push(image2);  // Add image2 for odd indexes
    }
}

let currentIndex = 0;
const mainImage = document.getElementById("mainImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const thumbnailsContainer = document.querySelector('.thumbnails');

/* Update the main image based on the current index */
function updateMainImage() {
    mainImage.src = images[currentIndex];
}

/* Event listener for "prev" button */
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateMainImage();
});

/* Event listener for "next" button */
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateMainImage();
});

/* Function to change the main image when a thumbnail is clicked */
function changeImage(imageUrl) {
    mainImage.src = imageUrl;
}

/* Scroll thumbnails horizontally */
let scrollAmount = 0;
const thumbnailWidth = 210; // Thumbnail width with margin

/* Scroll thumbnails left */
function scrollLeft() {
    if (scrollAmount > 0) {
        scrollAmount -= thumbnailWidth * 5; // Scroll by 5 thumbnails
        thumbnailsContainer.style.transform = `translateX(-${scrollAmount}px)`;
    }
}

/* Scroll thumbnails right */
function scrollRight() {
    if (scrollAmount < thumbnailsContainer.scrollWidth - thumbnailsContainer.clientWidth) {
        scrollAmount += thumbnailWidth * 5; // Scroll by 5 thumbnails
        thumbnailsContainer.style.transform = `translateX(-${scrollAmount}px)`;
    }
}

// Button event listeners for scrolling thumbnails
document.getElementById('prevButton').addEventListener("click", scrollLeft);
document.getElementById('nextButton').addEventListener("click", scrollRight);
