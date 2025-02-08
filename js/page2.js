document.addEventListener("DOMContentLoaded", function () {
    // List of images (Make sure they are named correctly and stored in "images/")
    const images = [
        "../images/1.png",
        "../images/IMG_5301.PNG",
        "../images/IMG_5302.PNG",
        "../images/IMG_5303.PNG",
        "../images/IMG_5304.PNG",
        "../images/IMG_5305.PNG",
        "../images/IMG_5306.PNG",
        "../images/IMG_5307.PNG",
        "../images/IMG_5308.PNG",
        "../images/IMG_5309.PNG",
        "../images/IMG_5311.PNG",
        "../images/IMG_5319.PNG",
        "../images/IMG_5312.PNG",
        "../images/IMG_5313.PNG",
        "../images/IMG_5314.PNG",
        "../images/IMG_5315.PNG",
        "../images/IMG_5316.PNG",
        "../images/IMG_5317.PNG",
        "../images/IMG_5318.PNG"
    ];

    let currentPage = 0; // Start at first image
    const bookImage = document.querySelector(".page.cover img");
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");

    // Function to update the displayed image
    function updatePage() {
        bookImage.src = images[currentPage];

        // Hide 'Previous' on first page
        prevButton.style.display = currentPage === 0 ? "none" : "block";
        
        // Hide 'Next' on last page
        nextButton.style.display = currentPage === images.length - 1 ? "none" : "block";
    }

    // Event Listeners for Buttons
    nextButton.addEventListener("click", function () {
        if (currentPage < images.length - 1) {
            currentPage++;
            updatePage();
        }
    });

    prevButton.addEventListener("click", function () {
        if (currentPage > 0) {
            currentPage--;
            updatePage();
        }
    });

    // Initialize
    updatePage();
});