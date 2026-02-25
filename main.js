function updateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    
    const now = new Date();
    
    // Format Time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    
    // Format Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('en-US', options);
}

// Initial call
updateTime();

// Update every second
setInterval(updateTime, 1000);

// Mouse parallax effect for the card
const card = document.querySelector('.card');
const container = document.body;

container.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(-5px)`;
});

// Reset card position on mouse leave
container.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg) translateY(0px)`;
    card.style.transition = 'all 0.5s ease';
});

container.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
});
