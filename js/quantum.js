document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.quantum-container');
    // Fewer particles on mobile for better performance
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const numParticles = isMobile ? 4 : 8;
    
    // Detect iOS specifically
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'quantum-particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random delay
        particle.style.animationDelay = Math.random() * 8 + 's';
        
        // iOS-specific adjustments
        if (isIOS) {
            // Create a more iOS-friendly particle with better visual quality
            particle.style.width = '6px';
            particle.style.height = '6px';
            
            // Force hardware acceleration
            particle.style.transform = 'translate3d(0, 0, 0)';
            particle.style.webkitTransform = 'translate3d(0, 0, 0)';
            
            // Apply additional rendering enhancements for iOS
            particle.style.boxShadow = '0 0 3px rgba(220, 20, 60, 0.6)';
            particle.style.border = '0.5px solid rgba(220, 20, 60, 0.9)';
            
            // For high-pixel-density iOS devices (Retina displays)
            if (window.devicePixelRatio >= 2) {
                // Use slightly larger size and stronger visual properties on high-DPI screens
                particle.style.width = '8px';
                particle.style.height = '8px';
            }
        }
        
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
