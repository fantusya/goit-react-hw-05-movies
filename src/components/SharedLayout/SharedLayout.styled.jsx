import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { GiFilmProjector } from 'react-icons/gi';
import { blink } from 'keyframes/keyframes';

export const NavLink = styled(Link)`
  position: relative;

  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.lm};
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  text-decoration: none;

  color: ${p => p.theme.colors.accent};

  transition: color ${p => p.theme.transition.main};

  &.active {
    /* background-clip: content-box; */
    color: ${p => p.theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.secondary};
  }

  ::after {
    content: '';
    display: block;

    position: absolute;
    bottom: ${p => p.theme.space[4]}px;
    left: ${p => p.theme.space[0]}px;

    width: 0%;
    height: ${p => p.theme.space[1]}px;

    border-radius: ${p => p.theme.radii.tiny};

    background-color: ${p => p.theme.colors.secondary};

    transition: width ${p => p.theme.transition.main};
  }

  :hover:not(.active)::after,
  :focus-visible:not(.active)::after {
    width: 100%;
  }
`;

export const Text = styled.p`
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const Icon = styled(GiFilmProjector)`
  color: ${p => p.theme.colors.white};

  transition: color ${p => p.theme.transition.main};

  :hover,
  :focus-visible {
    color: ${p => p.theme.colors.secondary};
    animation: ${blink} 0.6s both;
  }
`;
