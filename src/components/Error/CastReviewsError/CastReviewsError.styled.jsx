import styled from 'styled-components';
import { MdReviews } from 'react-icons/md';
import { BsPersonSquare } from 'react-icons/bs';

export const ErrorText = styled.p`
  text-align: center;

  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${p => p.theme.fonts.text};
  color: ${p => p.theme.colors.accent};
`;

export const ErrorCastIcon = styled(BsPersonSquare)`
  color: ${p => p.theme.colors.accent};
`;

export const ErrorReviewsIcon = styled(MdReviews)`
  color: ${p => p.theme.colors.accent};
`;
