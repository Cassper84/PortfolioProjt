'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from 'next-themes';



const ParticlesBackground = () => {
    const [init, setInit] = useState(false);
    const { theme } = useTheme();
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesOptions = {
        particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    area: 800,
                },
            },
            color: { value: theme === 'dark' ? '#ffffff' : '#000000' },
            shape: {
                type: 'circle',
            },
            opacity: {
                value: 0.5,
            },
            size: {
                value: 3,
            },
            move: {
                enable: true,
                speed: 2,
            },
            links: {
                enable: true,
                distance: 150,
                color: theme === 'dark' ? '#ffffff' : '#000000',
                opacity: 0.3,
                width: 1,
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: 'repulse',
                },
                onClick: {
                    enable: true,
                    mode: 'push',
                },
            },
            modes: {
                repulse: {
                    distance: 100,
                },
                push: {
                    quantity: 4,
                },
            },
        },
        fullScreen: {
            enable: true,
            zIndex: -1,
        },
        background: {
            color: theme === 'dark' ? '#000000' : '#ffffff',
        },
    };

    return init ? <Particles id="tsparticles" options={particlesOptions} /> : null;
};

export default ParticlesBackground;
