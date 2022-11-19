import { keyframes } from 'styled-components';

export const focusIn = keyframes`
    0% {
      letter-spacing: 1em;
      transform: translateZ(300px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      transform: translateZ(12px);
      filter: blur(0);
      opacity: 1;
    }
`;

export const heartbeat = keyframes`
    from {
      transform: scale(1);
      transform-origin: center center;
      animation-timing-function: ease-out;
    }
    10% {
      transform: scale(0.8);
      animation-timing-function: ease-in;
    }
    17% {
      transform: scale(1.1);
      animation-timing-function: ease-out;
    }
    33% {
      transform: scale(0.8);
      animation-timing-function: ease-in;
    }
    45% {
      transform: scale(1);
      animation-timing-function: ease-out;
    }
`;

export const blink = keyframes`
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
`;
