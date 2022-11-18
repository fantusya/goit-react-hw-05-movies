import styled from 'styled-components';
import { BsFillPatchExclamationFill } from 'react-icons/bs';

export const Heading = styled.h1`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.lx};
  /* padding-top: ${p => p.theme.space[5]}px; */
  padding-bottom: ${p => p.theme.space[5]}px;
  /* text-shadow: 2px -2px 4px rgba(255, 122, 168, 0.75); */
  /* ::before,
  ::after {
    content: '';
    background-image: '';
  } */
`;
