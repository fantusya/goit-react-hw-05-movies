import styled from 'styled-components';

export const MovieImg = styled.img`
  border-top-left-radius: ${p => p.theme.radii.normal};
  border-top-right-radius: ${p => p.theme.radii.normal};
  /* border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border}; */
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

export const MovieTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.bgMovie};
  height: 95px;
  /* padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px; */
  /* border-bottom-left-radius: ${p => p.theme.radii.normal};
  border-bottom-right-radius: ${p => p.theme.radii.normal}; */
`;

export const MovieTitle = styled.h2`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  /* font-weight: ${p => p.theme.fontWeights.normal}; */
  color: ${p => p.theme.colors.border};
  /* background-color: ${p => p.theme.colors.bgMovie};
  border-bottom-left-radius: ${p => p.theme.radii.normal};
  border-bottom-right-radius: ${p => p.theme.radii.normal}; */
  text-align: center;
  /* padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px; */
  text-shadow: 1px 0px 5px rgb(0, 0, 0);
`;
