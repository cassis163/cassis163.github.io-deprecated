import Particles from 'react-tsparticles';

const CHARACTERS = Array.from('Casper');

type JumbotronProps = {
  height?: string;
};

const Jumbotron: React.FC<JumbotronProps> = ({ height }) => (
  <Particles
    id="tsparticles"
    height={height}
    options={{
      background: {
        color: {
          value: '#0d47a1',
        },
        position: '50% 50%',
        repeat: 'no-repeat',
        size: 'cover',
      },
      fullScreen: false,
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          color: {
            value: '#ffffff',
          },
          distance: 150,
          enable: true,
          opacity: 0.4,
        },
        move: {
          attract: {
            rotate: {
              x: 600,
              y: 1200,
            },
          },
          enable: true,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: {
            min: 0.1,
            max: 0.5,
          },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
          },
        },
        shape: {
          options: {
            character: {
              value: CHARACTERS,
              font: 'Roboto',
              style: '',
              weight: '400',
              fill: true,
            },
            char: {
              value: CHARACTERS,
              font: 'Roboto',
              style: '',
              weight: '400',
              fill: true,
            },
          },
          type: 'char',
        },
        size: {
          value: 16,
          animation: {
            speed: 10,
            minimumValue: 10,
          },
        },
        stroke: {
          width: 1,
          color: {
            value: '#ffffff',
            animation: {
              h: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                sync: true,
              },
              s: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                sync: true,
              },
              l: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                sync: true,
              },
            },
          },
        },
      },
    }}
  />
);

Jumbotron.defaultProps = {
  height: '15rem',
};

export default Jumbotron;
