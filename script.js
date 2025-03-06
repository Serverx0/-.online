const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"]; // Replace with your image paths
let currentImageIndex = 0;
const mainImage = document.getElementById("mainImage");

function changeImage() {
    mainImage.style.opacity = 0; // Fade out
    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        mainImage.src = images[currentImageIndex];
        mainImage.style.opacity = 1; // Fade in
    }, 1000); // Wait for fade out
}

setInterval(changeImage, 3000); // Change image every 3 seconds
