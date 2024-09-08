import React, { useEffect, useRef, useState } from 'react';

import Matter from 'matter-js';

const FallingBricks: React.FC = () => {
  const scene = useRef<HTMLDivElement>(null);
  const bricksRefs = useRef<HTMLDivElement[]>([]);
  const [highlightedBrick, setHighlightedBrick] = useState<number | null>(null);

  const bricksData = [
    {
      x: 185,
      y: -1100,
      width: 356,
      height: 64,
      color: '#FFB899',
      text: 'Історики мистецтва',
      radius: 10,
      angle: 0,
    },
    {
      x: 465,
      y: -1100,
      width: 202,
      height: 64,
      color: '#F1FF66',
      text: 'Стріт-арт',
      radius: 10,
      angle: 0,
    },
    {
      x: 165,
      y: -1165,
      width: 243,
      height: 64,
      color: '#EB99FF',
      text: 'Арт-дилери',
      radius: 10,
      angle: 0,
    },
    {
      x: 620,
      y: -1165,
      width: 284,
      height: 64,
      color: '#9E92EE',
      text: 'Скульптура',
      radius: 10,
      angle: 0,
    },
    {
      x: 900,
      y: -1100,
      width: 257,
      height: 64,
      color: '#FFB899',
      text: 'Архітектура',
      radius: 10,
      angle: 0,
    },
    {
      x: 1190,
      y: -1100,
      width: 283,
      height: 64,
      color: '#9E92EE',
      text: 'Digital-art',
      radius: 10,
      angle: 0,
    },
    {
      x: 1165,
      y: -1165,
      width: 356,
      height: 64,
      color: '#F1FF66',
      text: 'Графічний дизайн',
      radius: 10,
      angle: 0,
    },
    {
      x: 1175,
      y: -1230,
      width: 338,
      height: 64,
      color: '#FFB899',
      text: 'Фотографія',
      radius: 10,
      angle: 0,
    },
    {
      x: 885,
      y: -1400,
      width: 239,
      height: 64,
      color: '#EB99FF',
      text: 'Мозаїка',
      radius: 10,
      angle: 0,
    },
    {
      x: 885,
      y: -1465,
      width: 239,
      height: 64,
      color: '#FFB899',
      text: 'Кераміка',
      radius: 10,
      angle: 0,
    },
    {
      x: 1000,
      y: -1625,
      width: 276,
      height: 64,
      color: '#9E92EE',
      text: 'Графіка',
      radius: 10,
      angle: 0,
    },
    {
      x: 1070,
      y: -1800,
      width: 404,
      height: 64,
      color: '#EB99FF',
      text: 'Текстильне мистецтво',
      radius: 10,
      angle: 0,
    },
    {
      x: 500,
      y: -1400,
      width: 287,
      height: 64,
      color: '#EB99FF',
      text: 'Мистецтвознавці',
      radius: 10,
      angle: 0,
    },
    {
      x: 400,
      y: -1400,
      width: 258,
      height: 64,
      color: '#FFB899',
      text: 'живопис',
      radius: 10,
      angle: 0,
    },

    {
      x: 300,
      y: -1400,
      width: 257,
      height: 64,
      color: '#F1FF66',
      text: 'Куратори',
      radius: 10,
      angle: 0,
    },
    {
      x: 750,
      y: -1600,
      width: 273,
      height: 64,
      color: '#F1FF66',
      text: 'Ілюстрація',
      radius: 10,
      angle: 0,
    },
    {
      x: 550,
      y: -1700,
      width: 279,
      height: 64,
      color: '#9E92EE',
      text: 'Культурологи',
      radius: 10,
      angle: 0,
    },
    {
      x: 250,
      y: -1800,
      width: 240,
      height: 64,
      color: '#FFB899',
      text: 'Митці',
      radius: 10,
      angle: 0,
    },

    {
      x: 500,
      y: -1900,
      width: 252,
      height: 64,
      color: '#EB99FF',
      text: 'мистецькі ЗМІ',
      radius: 10,
      angle: 0,
    },

    {
      x: 700,
      y: -2100,
      width: 395,
      height: 64,
      color: '#FFB899',
      text: 'Декоративне мистецтво',
      radius: 10,
      angle: 0,
    },
  ];

  useEffect(() => {
    const engine = Matter.Engine.create();
    // engine.gravity.y = 0; // Adjust this value to control the speed of falling
    const render = Matter.Render.create({
      element: scene.current!,
      engine,
      options: {
        width: 1350,
        height: 400,
        wireframes: false, // Не відображає каркасні лінії
        background: 'transparent',
      },
    });

    const runner = Matter.Runner.create();

    // Обмеження по краям
    const walls = [
      // Matter.Bodies.rectangle(400, 0, 800, 50, { isStatic: true }), // верх
      Matter.Bodies.rectangle(1350 / 2, 400, 1350, 50, {
        isStatic: true,
        render: {
          visible: false,
        },
      }), // низ
      Matter.Bodies.rectangle(0, 200, 5, 400, {
        isStatic: true,
        render: {
          visible: false,
        },
      }), // ліво
      Matter.Bodies.rectangle(1350, 200, 5, 400, {
        isStatic: true,
        render: {
          visible: false,
        },
      }), // право
    ];

    const bricks = bricksData.map(
      // ({ x, y, width, height, color, radius, angle }, index) => {
      ({ x, y, width, height, radius, angle }, index) => {
        const brick = Matter.Bodies.rectangle(x, y, width, height, {
          angle,
          mass: 20,
          friction: 0.4,
          isStatic: false,
          render: {
            opacity: 0,
            fillStyle: 'transparent',
            strokeStyle: 'transparent',
            lineWidth: 2,
          },
          chamfer: { radius },
        });

        Matter.Events.on(engine, 'afterUpdate', () => {
          const { x, y } = brick.position;
          const ref = bricksRefs.current[index];

          if (ref) {
            ref.style.transform = `translate(${x - width / 2}px, ${y - height / 2}px) rotate(${brick.angle}rad)`;
          }
        });

        return brick;
      },
    );

    Matter.World.add(engine.world, [...walls, ...bricks]);

    const handleMouseMove = (event: MouseEvent) => {
      const rect = scene.current!.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      let foundBrickIndex: number | null = null;

      bricks.forEach((brick, index) => {
        const { min, max } = brick.bounds;

        if (mouseX >= min.x && mouseX <= max.x && mouseY >= min.y && mouseY <= max.y) {
          foundBrickIndex = index;
        }
      });

      setHighlightedBrick(foundBrickIndex);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            Matter.Runner.run(runner, engine);
            Matter.Render.run(render);
          } else {
            Matter.Runner.stop(runner);
            Matter.Render.stop(render);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(scene.current!);
    scene.current!.addEventListener('mousemove', handleMouseMove);

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);

      if (scene.current) {
        scene.current.removeEventListener('mousemove', handleMouseMove);
      }

      observer.disconnect();

      Matter.World.clear(engine.world, false); // Передаємо false, щоб очистити всі тіла
      Matter.Engine.clear(engine);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center items-center relative h-[500px] mt-3 mb-10 z-10 overflow-hidden">
      <div
        ref={scene}
        style={{
          position: 'relative',
          width: '1350px',
          height: '400px',
        }}
      >
        {bricksData.map((brick, index) => (
          <div
            key={index}
            // eslint-disable-next-line no-return-assign
            ref={(el) => (bricksRefs.current[index] = el!)}
            style={{
              position: 'absolute',
              width: `${brick.width - 2}px`,
              height: `${brick.height - 2}px`,
              color: '#151515',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              pointerEvents: 'none',
              background: brick.color,
              opacity: highlightedBrick === index ? 1 : 0.5,
              transition: 'opacity 0.3s ease',
              borderRadius: 10,
            }}
          >
            {brick.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FallingBricks;
