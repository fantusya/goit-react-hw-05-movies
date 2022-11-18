import styled from 'styled-components';
import { BsPersonCircle } from 'react-icons/bs';

export const AuthorName = styled.p`
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.mx};
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.header};
  border: ${p => p.theme.borders.normal};
  ${p => p.theme.colors.movieTitle};
`;

export const PersonIcon = styled(BsPersonCircle)`
  color: ${p => p.theme.colors.accent};
`;

export const TextContainer = styled.div`
  padding: ${p => p.theme.space[4]}px;
  background: repeating-linear-gradient(
      #5b4d4f 1px,
      transparent 2px,
      transparent 28px
    ),
    repeating-linear-gradient(
      90deg,
      #5b4d4f 1px,
      transparent 2px,
      transparent 28px
    );
  border-radius: ${p => p.theme.radii.normal};
`;

export const ReviewText = styled.p`
  text-align: justify;
  /* font-weight: ${p => p.theme.fontWeights.bold}; */
  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes.m};
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  color: ${p => p.theme.colors.white};
  line-height: ${p => p.theme.lineHeights.heading};
  font-style: italic;
`;
