import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  ExtraInfoContainer,
  TapIcon,
} from 'components/ExtraInfo/ExtraInfo.styled';
import { heartbeat } from 'keyframes/keyframes';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;

  max-width: calc(100vw - 50px);
`;

export const ListItem = styled.li`
  overflow: hidden;

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.normal};

  :hover ${ExtraInfoContainer}, :focus-visible ${ExtraInfoContainer} {
    opacity: 1;
  }

  :hover ${TapIcon}, :focus-visible ${TapIcon} {
    animation: ${heartbeat} 1.5s ease-in-out infinite both;
  }
`;

export const MovieLink = styled(NavLink)`
  display: inline-block;

  position: relative;

  height: 100%;
  width: 100%;

  background-color: ${p => p.theme.colors.bgMovie};

  text-decoration: none;
`;
