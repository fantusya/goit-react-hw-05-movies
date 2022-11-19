import styled from 'styled-components';

export const MovieImg = styled.img`
  width: 100%;
  height: 500px;

  object-fit: cover;

  border-top-left-radius: ${p => p.theme.radii.normal};
  border-top-right-radius: ${p => p.theme.radii.normal};
`;

export const MovieTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 95px;

  background-color: ${p => p.theme.colors.bgMovie};
`;

export const MovieTitle = styled.h2`
  text-align: center;

  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};

  color: ${p => p.theme.colors.border};

  text-shadow: 1px 0px 5px ${p => p.theme.colors.black};
`;
