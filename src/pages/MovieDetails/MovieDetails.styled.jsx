import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.section`
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[4]}px
    ${p => p.theme.space[3]}px;

  background-image: linear-gradient(
      rgba(47, 48, 58, 0.8),
      rgba(47, 48, 58, 0.8)
    ),
    ${setBgImg};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BackLink = styled(NavLink)`
  padding: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[4]}px;

  width: 150px;
  height: 50px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;

  border: ${p => p.theme.borders.doubled} ${p => p.theme.colors.transparent};
  border-radius: ${p => p.theme.radii.normal};

  background-color: ${p => p.theme.colors.border};
  color: ${p => p.theme.colors.header};

  transition: color ${p => p.theme.transition.main},
    background-color ${p => p.theme.transition.main},
    border-color ${p => p.theme.transition.main};

  :hover,
  :focus-visible {
    border-color: ${p => p.theme.colors.border};

    color: ${p => p.theme.colors.border};
    background-color: ${p => p.theme.colors.header};
  }
`;

export const MovieTitle = styled.h1`
  margin-bottom: ${p => p.theme.space[4] + 4}px;

  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  letter-spacing: ${p => p.theme.letterSpacings.normal};

  color: ${p => p.theme.colors.accent};

  text-shadow: 1px 0px 2px ${p => p.theme.colors.detailsTitleShadow};
`;

export const MovieImg = styled.img`
  width: 450px;
`;

export const MoviePar = styled.p`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.colors.white};
`;

export const MovieDesc = styled.p`
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes.m};
  text-align: justify;

  border-radius: ${p => p.theme.radii.normal};

  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.border};
`;

export const MovieText = styled.p`
  max-width: 600px;

  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.mx};
  text-align: justify;

  border-radius: ${p => p.theme.radii.normal};

  color: ${p => p.theme.colors.border};
`;

export const DetailsLink = styled(NavLink)`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.lm};
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  text-decoration: none;

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.normal};

  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.header};

  transition: color ${p => p.theme.transition.main};

  &.active {
    color: ${p => p.theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.secondary};
  }
`;

export const Ul = styled.ul`
  position: relative;

  display: inline-flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;

  margin-bottom: ${p => p.theme.space[5]}px;

  ::before {
    content: '';
    display: inline-block;

    position: absolute;
    top: ${p => p.theme.space[0]};
    left: -40px;

    width: 3px;
    height: 100%;

    background-color: ${p => p.theme.colors.border};
  }
`;

function setBgImg({ bgImg }) {
  return `url(${bgImg})`;
}
