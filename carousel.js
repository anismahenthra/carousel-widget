const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
let currentIndex = 0;

function changeImage(imageSrc) {
    document.getElementById('mainImage').src = imageSrc;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('mainImage').src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('mainImage').src = images[currentIndex];
}
