document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.quantum-container');
    const numParticles = 8;

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'quantum-particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random delay
        particle.style.animationDelay = Math.random() * 8 + 's';
        
        container.appendChild(particle);
        
        // Remove and recreate particle after animation
        particle.addEventListener('animationend', function() {
            particle.remove();
            createParticle();
        });
    }

    // Create initial particles
    for (let i = 0; i < numParticles; i++) {
        createParticle();
    }
});
