import styled from 'styled-components';

export const ActorName = styled.span`
  display: inline-block;
  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.header};
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Character = styled.span`
  display: inline-block;
  text-align: center;
  color: ${p => p.theme.colors.white};
  font-style: italic;
`;
