import styled from 'styled-components';

export const Form = styled.form`
  display: inline-block;
  position: relative;
`;

export const Input = styled.input`
  padding: ${p => p.theme.space[4]}px;
  /* margin-bottom: ${p => p.theme.space[5]}px; */
  min-width: 500px;

  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.mx};

  border: ${p => p.theme.borders.doubled} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};

  outline: ${p => p.theme.colors.transparent};
  background-color: ${p => p.theme.colors.bgInput};
  color: ${p => p.theme.colors.white};
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 0;
  right: 10px;
  transform: translateY(20%);
  padding: ${p => p.theme.space[0]}px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  background-color: ${p => p.theme.colors.transparent};
  cursor: pointer;
  color: ${p => p.theme.colors.white};
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
  color: ${p => p.theme.colors.header};
  font-size: ${p => p.theme.fontSizes.mx};
  font-style: italic;
  font-weight: ${p => p.theme.fontWeights.bold};
`;
