import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 粒子类
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `rgba(99, 102, 241, ${Math.random() * 0.5 + 0.2})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // 创建粒子数组
    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // 动画循环
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      // 连接邻近粒子
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 - distance / 500})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    // 响应窗口大小变化
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="particles-container">
      <canvas ref={canvasRef}></canvas>
      {/* 3D 抽象形状 */}
      <motion.div
        className="blob-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* 浮动的 3D 抽象形状 */}
        <motion.div
          className="float"
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '200px',
            height: '200px',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            filter: 'blur(40px)',
            zIndex: 0,
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            borderRadius: [
              '60% 40% 30% 70% / 60% 30% 70% 40%',
              '30% 60% 70% 40% / 50% 60% 30% 60%',
              '60% 40% 30% 70% / 60% 30% 70% 40%',
            ],
          }}
          transition={{
            duration: 15,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
        <motion.div
          className="float"
          style={{
            position: 'absolute',
            top: '50%',
            right: '15%',
            width: '300px',
            height: '300px',
            background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))',
            borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
            filter: 'blur(50px)',
            zIndex: 0,
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            rotate: [0, -180, -360],
            borderRadius: [
              '40% 60% 70% 30% / 40% 70% 30% 60%',
              '70% 30% 40% 60% / 60% 40% 60% 40%',
              '40% 60% 70% 30% / 40% 70% 30% 60%',
            ],
          }}
          transition={{
            duration: 20,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
        <motion.div
          className="float"
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '30%',
            width: '250px',
            height: '250px',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(99, 102, 241, 0.2))',
            borderRadius: '70% 30% 50% 50% / 60% 40% 60% 40%',
            filter: 'blur(45px)',
            zIndex: 0,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            rotate: [0, 270, 540],
            borderRadius: [
              '70% 30% 50% 50% / 60% 40% 60% 40%',
              '50% 50% 70% 30% / 40% 60% 40% 60%',
              '70% 30% 50% 50% / 60% 40% 60% 40%',
            ],
          }}
          transition={{
            duration: 18,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      </motion.div>
    </div>
  );
};

export default ParticlesBackground;