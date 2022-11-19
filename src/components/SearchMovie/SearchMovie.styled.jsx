import styled from 'styled-components';

export const Form = styled.form`
  display: inline-block;
  position: relative;
`;

export const Input = styled.input`
  padding: ${p => p.theme.space[4]}px;
  min-width: 500px;

  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.mx};

  border: ${p => p.theme.borders.doubled} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};
  outline: ${p => p.theme.colors.transparent};

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.bgInput};
`;

export const SearchButton = styled.button`
  position: absolute;
  top: ${p => p.theme.space[0]};
  right: ${p => p.theme.space[3]}px;
  transform: translateY(20%);

  padding: ${p => p.theme.space[0]}px;

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.transparent};

  cursor: pointer;

  transition: color ${p => p.theme.transition.main};

  :hover,
  :focus {
    color: ${p => p.theme.colors.header};
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: 50%;
  transform: translate(10%, 50%);

  font-size: ${p => p.theme.fontSizes.mx};
  font-style: italic;
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.colors.header};
`;
