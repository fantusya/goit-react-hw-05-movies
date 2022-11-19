import styled from 'styled-components';
import { GiClick } from 'react-icons/gi';

export const ExtraInfoContainer = styled.div`
  display: block;
  position: absolute;
  top: ${p => p.theme.space[0]};
  left: ${p => p.theme.space[0]};

  width: 100%;
  height: 100%;

  padding: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[6]}px;

  border-radius: ${p => p.theme.radii.normal};

  background-color: ${p => p.theme.colors.extraInfoBg};
  opacity: 0;

  cursor: pointer;

  transition: opacity ${p => p.theme.transition.main};
`;

export const ExtraInfoItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: ${p => p.theme.space[3] + 2}px;
`;

export const ExtraInfoPar = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-style: italic;

  color: ${p => p.theme.colors.accent};
`;

export const ExtraInfoValue = styled.p`
  font-size: ${p => p.theme.fontSizes.m};

  color: ${p => p.theme.colors.white};
`;

export const TapIcon = styled(GiClick)`
  color: ${p => p.theme.colors.white};
`;

export const TapText = styled.span`
  font-size: ${p => p.theme.fontSizes.m};

  color: ${p => p.theme.colors.white};
`;
