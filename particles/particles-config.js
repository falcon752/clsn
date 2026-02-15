// Initialize particles with the same configuration as your React component
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181', '#AA96DA', '#FCBAD3', '#A8D8EA']
        },
        shape: {
            type: ['circle', 'triangle', 'polygon', 'star'],
            stroke: {
                width: 2,
                color: '#fff'
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.3,
                sync: false
            }
        },
        size: {
            value: 8,
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 4,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 180,
            color: '#A8D8EA',
            opacity: 0.4,
            width: 2
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'bounce',
            bounce: true,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: ['grab', 'bubble']
            },
            onclick: {
                enable: true,
                mode: 'repulse'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 0.8
                }
            },
            repulse: {
                distance: 300,
                duration: 0.6
            },
            bubble: {
                distance: 250,
                size: 15,
                duration: 2,
                opacity: 1
            }
        }
    },
    retina_detect: true
});
