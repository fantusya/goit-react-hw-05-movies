import styled from 'styled-components';
import { focusIn } from 'keyframes/keyframes';

export const Heading = styled.h1`
  padding-bottom: ${p => p.theme.space[5]}px;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.lx};
  text-transform: uppercase;
  letter-spacing: ${p => p.theme.letterSpacings.big};
  word-spacing: 0.2em;

  color: ${p => p.theme.colors.accent};

  text-shadow: 3px 0px 2px ${p => p.theme.colors.mainTitleShadow};

  animation: ${focusIn} 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
