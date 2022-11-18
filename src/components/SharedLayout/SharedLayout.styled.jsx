import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { GiFilmProjector } from 'react-icons/gi';

export const NavLink = styled(Link)`
  position: relative;
  text-decoration: none;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.lm};
  letter-spacing: ${p => p.theme.letterSpacings.normal};

  color: ${p => p.theme.colors.accent};
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;

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
    width: 0%;
    height: 3px;
    background-color: ${p => p.theme.colors.secondary};
    transition: width ${p => p.theme.transition.main};
    border-radius: 5px;
    display: block;
    position: absolute;
    bottom: 15px;
    left: 0;
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
  :focus {
    color: ${p => p.theme.colors.secondary};
  }
`;
