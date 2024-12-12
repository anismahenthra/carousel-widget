$w.onReady(function () {
    let images = [
        "https://static.wixstatic.com/media/3e231f_c8bf5858d17643c9a7d2bfdec1149d29~mv2.png",
        "https://static.wixstatic.com/media/3e231f_646dda40800d48a39ef124cf9fb2fbb8~mv2.png",
        "https://static.wixstatic.com/media/3e231f_c8bf5858d17643c9a7d2bfdec1149d29~mv2.png",
        "https://static.wixstatic.com/media/3e231f_c8bf5858d17643c9a7d2bfdec1149d29~mv2.png"
    ];

    let currentIndex = 0;

    const mainImage = $w("#mainImage"); 
    const thumbnailContainer = $w("#thumbnailContainer");
    const thumbnails = $w("#thumbnailContainer").children;
    const prevButton = $w("#prevButton");
    const nextButton = $w("#nextButton");

    // Set initial main image
    mainImage.src = images[currentIndex];

    // Event listener for the "prev" button
    prevButton.onClick(() => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    // Event listener for the "next" button
    nextButton.onClick(() => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    // Event listener for each thumbnail
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.onClick(() => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Update main image and thumbnail position
    function updateCarousel() {
        mainImage.src = images[currentIndex];

        // Endless loop logic for thumbnails
        const firstThumbnail = thumbnailContainer.children[0];
        const lastThumbnail = thumbnailContainer.children[thumbnailContainer.children.length - 1];

        // Move the first thumbnail to the last when going backwards
        if (currentIndex === 0) {
            thumbnailContainer.append(firstThumbnail);
        }
        // Move the last thumbnail to the first when going forward
        else if (currentIndex === images.length - 1) {
            thumbnailContainer.prepend(lastThumbnail);
        }

        // Optionally, update the visual scroll of thumbnails (smooth transition)
        thumbnailContainer.style.transform = `translateX(-${currentIndex * 110}px)`;
    }
});
