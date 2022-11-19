import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  display: inline-block;
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m};
  letter-spacing: ${p => p.theme.letterSpacings.big};
  text-transform: uppercase;

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  border-radius: ${p => p.theme.radii.normal};
  outline: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};

  color: ${p => p.theme.colors.white};
  background-image: linear-gradient(
    to right,
    #1d2b64 0%,
    #f8cdda 51%,
    #1d2b64 100%
  );
  background-size: 200% auto;

  box-shadow: 0 0 20px ${p => p.theme.colors.border};

  cursor: pointer;

  transition: ${p => p.theme.transition.main};

  :hover {
    background-position: right center;
    color: ${p => p.theme.colors.white};
  }
`;
