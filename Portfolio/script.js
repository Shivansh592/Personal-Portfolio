// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Simple form submission alert (for demo; replace with actual backend if needed)
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message sent! (This is a demo alert)');
    this.reset();
});