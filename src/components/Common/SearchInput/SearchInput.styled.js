import { BsSearch } from 'react-icons/bs';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import styled from 'styled-components';
import { device } from 'utils/device';

export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  @media ${device.tablet} {
    margin-bottom: 60px;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
`;

export const Input = styled.input`
  position: relative;
  display: flex;
  align-items: center;
  width: 280px;
  background-color: ${p => p.theme.colors.white};

  padding: ${p =>
    `${p.theme.space[3] + 2}px ` +
    `${p.theme.space[3] + 2}px ` +
    `${p.theme.space[3] + 2}px ` +
    `${p.theme.space[4] + 4}px`};

  border: 1px solid transparent;

  outline: ${p => p.theme.borders.none};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: ${p => p.theme.radii.lxg};
  outline: ${p => p.theme.borders.none};

  font-style: normal;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  letter-spacing: ${p => p.theme.letterSpacing.l};

  color: ${p => p.theme.colors.form.formPlaceholder};

  &:hover,
  &:focus {
    /* border: ${p => p.theme.borders.none};
    outline: ${p => p.theme.borders.none}; */
    border: 1px solid rgba(245, 146, 86, 0.5);
  }

  @media ${device.tablet} {
    width: 608px;
    border-radius: ${p => p.theme.radii.xxl};
    font-size: ${p => p.theme.fontSizes.sm};
    line-height: ${p => p.theme.lineHeights.nav};
  }
`;

export const IconSearch = styled(BsSearch)`
  width: ${p => `${p.theme.space[4] + 4}px`};
  height: ${p => `${p.theme.space[4] + 4}px`};
  color: ${p => p.theme.colors.button.primaryText};
  transition: color ${p => p.theme.animation.cubic};

  @media ${device.tablet} {
    width: ${p => `${p.theme.space[4] + 8}px`};
    height: ${p => `${p.theme.space[4] + 8}px`};
  }

  &:hover,
  &:focus {
    color: ${x => x.theme.colors.button.accent};
  }
`;

export const IconClose = styled(IoMdCloseCircleOutline)`
  width: ${p => `${p.theme.space[4] + 4}px`};
  height: ${p => `${p.theme.space[4] + 4}px`};
  color: ${p => p.theme.colors.button.primaryText};
  transition: color ${p => p.theme.animation.cubic};

  @media ${device.tablet} {
    width: ${p => `${p.theme.space[4] + 8}px`};
    height: ${p => `${p.theme.space[4] + 8}px`};
  }

  &:hover,
  &:focus {
    color: ${x => x.theme.colors.button.accent};
  }
`;
