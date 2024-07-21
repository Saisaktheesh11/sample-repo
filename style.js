// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add fade-in animation to elements in viewport
function addFadeInAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

// Event listener for scroll events
document.addEventListener('scroll', function() {
    addFadeInAnimation();
});

// Initial check when the page loads
document.addEventListener('DOMContentLoaded', function() {
    addFadeInAnimation();
});
