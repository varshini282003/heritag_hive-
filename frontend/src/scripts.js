// Handle quiz submission
document.getElementById('submitReview')?.addEventListener('click', () => {
    const reviewText = document.getElementById('reviewText').value;
    if (reviewText) {
        console.log('Review submitted:', reviewText);
        alert('Review submitted successfully!');
    } else {
        alert('Please write a review before submitting.');
    }
});

// Populate gallery with images (as an example)
const galleryContainer = document.getElementById('gallery');
const galleryImages = ['tajmahal.jpg', 'redfort.jpg', 'hawamahal.jpg'];

galleryImages.forEach((image) => {
    const img = document.createElement('img');
    img.src = `/images/${image}`;
    img.alt = 'Heritage Site';
    img.classList.add('gallery-image');
    galleryContainer.appendChild(img);
});

// Initialize map (example)
const mapElement = document.getElementById('map');
if (mapElement) {
    const map = L.map('map').setView([20.5937, 78.9629], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
}
