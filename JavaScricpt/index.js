// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const increment = target / 200;
    
    const updateCounter = () => {
        const count = +counter.innerText;
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    };
    
    updateCounter();
});

// Form Submission Handler
document.getElementById('complaintForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Complaint submitted successfully! Your complaint ID is: ' + Math.random().toString(36).substr(2, 9).toUpperCase());
});

// Simulated QR Code Detection
function simulateQRScan() {
    document.getElementById('poleId').value = 'STL-' + Math.floor(Math.random() * 10000);
}

// Initialize map placeholder
function initMap() {
    // Map initialization code would go here
    console.log('Map initialized');
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});