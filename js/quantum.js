class QuantumParticle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = (Math.random() - 0.5) * 2;
        this.dy = (Math.random() - 0.5) * 2;
        this.life = 100; // Particle lifespan
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;
        this.life--;
        return this.life > 0;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.life / 100})`;
        ctx.fill();
    }
}

const quantumAnimation = {
    particles: [],
    maxParticles: 50, // Limit total particles
    lastTime: 0,
    minTimeBetweenParticles: 100, // Minimum ms between particle creation

    init() {
        const container = document.querySelector('.quantum-container');
        if (!container) return;

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        container.appendChild(this.canvas);

        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();

        container.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    },

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },

    createParticle(x, y) {
        const now = Date.now();
        if (now - this.lastTime < this.minTimeBetweenParticles) return;
        if (this.particles.length >= this.maxParticles) return;

        this.lastTime = now;
        const radius = Math.random() * 2 + 1;
        const color = '255, 255, 255';
        this.particles.push(new QuantumParticle(x, y, radius, color));
    },

    handleMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        this.createParticle(x, y);
    },

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update and filter particles in one pass
        this.particles = this.particles.filter(particle => {
            const isAlive = particle.update();
            if (isAlive) {
                particle.draw(this.ctx);
            }
            return isAlive;
        });

        requestAnimationFrame(() => this.animate());
    }
};

document.addEventListener('DOMContentLoaded', () => quantumAnimation.init());
