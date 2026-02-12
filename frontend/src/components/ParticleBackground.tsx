import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      // Keep canvas sized to the viewport only — huge canvases (page height)
      // are expensive to allocate and paint and cause scroll jank.
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      // Reduce particle count and scale with viewport area to avoid O(n^2)
      const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 30000));

      // Professional color palette
      const colors = [
        'rgba(79, 172, 254, 0.4)',   // Professional Blue
        'rgba(16, 185, 129, 0.4)',   // Emerald Green
        'rgba(139, 92, 246, 0.4)',   // Purple
        'rgba(245, 158, 11, 0.3)',   // Amber
        'rgba(236, 72, 153, 0.3)',   // Pink
        'rgba(99, 102, 241, 0.4)',   // Indigo
      ];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.6, // Slower movement for elegance
          vy: (Math.random() - 0.5) * 0.6,
          size: Math.random() * 2.5 + 0.5, // Smaller particles
          opacity: Math.random() * 0.7 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      particlesRef.current = particles;
    };

    const animate = () => {
      const now = Date.now();
      ctx.fillStyle = 'rgba(2, 6, 23, 0.15)'; // Deep professional navy for fade effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // Update position with slight floating effect. Compute time once
        particle.x += particle.vx;
        particle.y += particle.vy + Math.sin(now * 0.001 + particle.x * 0.01) * 0.06;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with glow effect
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.shadowBlur = 15;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.restore();

        // Draw limited connections: avoid full O(n^2) checks by only
        // checking a few nearby particles (next N in array). This is a
        // pragmatic performance trade-off that keeps the visual while
        // bounding CPU cost.
        const maxNeighbors = 8;
        for (let j = index + 1; j < Math.min(particlesRef.current.length, index + 1 + maxNeighbors); j++) {
          const otherParticle = particlesRef.current[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distanceSq = dx * dx + dy * dy;
          const maxDist = 120;
          if (distanceSq < maxDist * maxDist) {
            const distance = Math.sqrt(distanceSq);
            const opacity = ((maxDist - distance) / maxDist) * 0.13;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(79, 172, 254, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    createParticles();
    
    // Start animation
    animate();

    // Handle resize
    const handleResize = () => {
      // On resize, update canvas size and re-create particles to fit
      // the new viewport. Resizing on scroll was causing frequent
      // canvas reallocations and jank — remove that.
      resizeCanvas();
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ 
        background: 'linear-gradient(135deg, #020617 0%, #0f172a 20%, #1e293b 40%, #334155 60%, #1e293b 80%, #020617 100%)',
        zIndex: -1 
      }}
    />
  );
}
