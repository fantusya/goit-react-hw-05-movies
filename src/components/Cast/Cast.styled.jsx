import styled from 'styled-components';

export const ActorName = styled.span`
  display: inline-block;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  font-weight: ${p => p.theme.fontWeights.bold};

  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.white};

  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.header};
`;

export const Character = styled.span`
  display: inline-block;
  text-align: center;

  font-style: italic;

  color: ${p => p.theme.colors.white};
`;
