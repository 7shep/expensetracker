document.addEventListener('DOMContentLoaded', () => {
    const text = "Welcome to Shep's Expense Tracker";
    const typingElement = document.getElementById('animated-text');
    let index = 0;
    let forward = true;

    function typeEffect() {
        if (forward) {
            // Add letters forward
            typingElement.textContent += text[index++];
            if (index === text.length) {
                // Once we've reached the end, start removing letters
                forward = false;
                setTimeout(typeEffect, 1500); // Wait a bit longer at the end before deleting
            } else {
                setTimeout(typeEffect, 150); // Adjust typing speed (in ms)
            }
        } else {
            // Remove letters backward
            typingElement.textContent = typingElement.textContent.slice(0, -1);
            index--;
            if (index === 0) {
                // Once we've reached the beginning, start adding letters again
                forward = true;
                setTimeout(typeEffect, 1500); // Wait a bit longer at the start before retyping
            } else {
                setTimeout(typeEffect, 100); // Adjust deleting speed (in ms)
            }
        }
    }

    typeEffect(); // Start the animation
});
