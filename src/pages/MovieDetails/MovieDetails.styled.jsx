import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { TfiBackLeft } from 'react-icons/tfi';

export const Container = styled.section`
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.8),
      rgba(47, 48, 58, 0.8)
    ),
    ${setBgImg};
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
`;

export const BackLink = styled(NavLink)`
  width: 150px;
  height: 50px;
  padding: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[4]}px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${p => p.theme.colors.border};
  color: ${p => p.theme.colors.header};
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  border: ${p => p.theme.borders.doubled} ${p => p.theme.colors.transparent};
  font-weight: ${p => p.theme.fontWeights.bold};

  transition: color ${p => p.theme.transition.main},
    background-color ${p => p.theme.transition.main},
    border-color ${p => p.theme.transition.main};

  :hover,
  :focus {
    color: ${p => p.theme.colors.border};
    background-color: ${p => p.theme.colors.header};
    border-color: ${p => p.theme.colors.border};
  }
`;

export const BackIcon = styled(TfiBackLeft)`
  color: inherit;
  /* background-color: inherit; */
`;

export const BackText = styled.span`
  color: inherit;
  /* background-color: inherit; */
  display: inline-block;
`;

export const MovieTitle = styled.h1`
  font-family: ${p => p.theme.fonts.heading};
  color: ${p => p.theme.colors.accent};
  font-weight: ${p => p.theme.fontWeights.normal};
  margin-bottom: ${p => p.theme.space[4] + 4}px;
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  text-shadow: 1px 0px 2px rgb(227, 180, 180);
`;

export const MovieImg = styled.img`
  width: 450px;
  /* border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border}; */
`;

export const MoviePar = styled.p`
  max-width: 500px;
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const MovieDesc = styled.p`
  max-width: 500px;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m};
  text-align: justify;
  background-color: ${p => p.theme.colors.border};
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  border-radius: ${p => p.theme.radii.normal};
  font-family: ${p => p.theme.fonts.text};
`;

export const MovieText = styled.p`
  max-width: 500px;
  color: ${p => p.theme.colors.border};
  font-size: ${p => p.theme.fontSizes.mx};
  text-align: justify;
  border-radius: ${p => p.theme.radii.normal};
  font-family: ${p => p.theme.fonts.body};
`;

export const DetailsLink = styled(NavLink)`
  text-decoration: none;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.lm};
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  color: ${p => p.theme.colors.accent};
  transition: color ${p => p.theme.transition.main};
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.header};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};

  &.active {
    /* background-clip: content-box; */
    color: ${p => p.theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.secondary};
  }
`;

export const Ul = styled.ul`
  display: inline-flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: -40px;
    display: inline-block;
    width: 3px;
    height: 100%;
    background-color: ${p => p.theme.colors.border};
  }
`;

function setBgImg({ bgImg }) {
  return `url(${bgImg})`;
}
