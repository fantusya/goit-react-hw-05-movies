import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ExtraInfoContainer } from 'components/ExtraInfo/ExtraInfo.styled';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 50px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
`;

export const ListItem = styled.li`
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.normal};
  /* background-color: ${p => p.theme.colors.bgMovie}; */
  overflow: hidden;
  :hover ${ExtraInfoContainer} {
    opacity: 1;
  }
`;

export const MovieLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  height: 100%;
  width: 100%;
  display: inline-block;
`;
