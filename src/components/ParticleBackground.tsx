import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particle
    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      life: 0,
      maxLife: Math.random() * 200 + 150,
      size: Math.random() * 4 + 2,
    });

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 80; i++) {
        particlesRef.current.push(createParticle());
      }
    };

    // Update particles
    const updateParticles = () => {
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Wrap around screen edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Remove dead particles and create new ones
        if (particle.life >= particle.maxLife) {
          particlesRef.current[index] = createParticle();
        }
      });
    };

    // Render particles
    const renderParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle) => {
        const lifeRatio = particle.life / particle.maxLife;
        let alpha = 1;
        
        // Fade in for first 20% of life
        if (lifeRatio < 0.2) {
          alpha = lifeRatio / 0.2;
        }
        // Fade out for last 20% of life
        else if (lifeRatio > 0.8) {
          alpha = 1 - ((lifeRatio - 0.8) / 0.2);
        }

        // Create gradient for red particle with glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        
        // Use CSS custom property for brand red color
        gradient.addColorStop(0, `rgba(239, 68, 68, ${alpha * 0.8})`); // Red center
        gradient.addColorStop(0.5, `rgba(239, 68, 68, ${alpha * 0.4})`); // Red middle
        gradient.addColorStop(1, `rgba(239, 68, 68, 0)`); // Transparent edge

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    };

    // Animation loop
    const animate = () => {
      updateParticles();
      renderParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
    />
  );
};

export default ParticleBackground;