import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledButton } from 'components/Common/Button/Button.styled';
import { device } from 'utils/device';

// import TextField from '@mui/material/TextField';

// export const Input = styled(TextField)`
//   width: 100%;

//   label {
//     padding-left: 26px;
//   }
//   div {
//     height: 48px;
//     border-radius: 40px;
//     border: 1px solid tomato;

//     input {
//       padding-left: 42px;
//     }
//   }
// `;

export const Input = styled.input`
  width: 100%;

  height: 52px;
  padding: 13px 32px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  outline: none;
  color: rgba(17, 17, 17, 0.8);
  font-family: 'Manrope';
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.04em;

  &::placeholder {
    font-family: 'Manrope';
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.04em;

    color: rgba(17, 17, 17, 0.6);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => `${p.theme.space[5] + 8}px`};

  @media ${device.fablet} {
    width: ${p => `${p.theme.space[9] + 96}px`};
    padding: ${p => `${p.theme.space[5] + 28}px ${p.theme.space[6] + 16}px`};
    background: ${p => p.theme.colors.white};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: ${p => p.theme.radii.xxl};
  }

  @media ${device.tablet} {
    width: ${p => `${p.theme.space[9] + 106}px`};
  }
`;

export const InputWrp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => `${p.theme.space[4]}px`}; ;;
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  text-align: center;
  letter-spacing: ${p => p.theme.letterSpacing.l};
  color: ${p => p.theme.colors.text.sectionTitle};

  @media ${device.fablet} {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: ${p => p.theme.lineHeights.title};
  text-align: center;
  letter-spacing: ${p => p.theme.letterSpacing.l};
  color: ${p => p.theme.colors.text.dataText};
`;

export const RegisterLink = styled(Link)`
  color: ${p => p.theme.colors.text.link};
  text-decoration: underline;
`;

export const AuthBtn = styled(StyledButton)`
  width: 100%;
  padding: ${p => `${p.theme.space[3] + 2}px ${p.theme.space[4] + 12}px`};
  background: ${p => p.theme.colors.button.primaryBackground};
  border-radius: ${p => p.theme.radii.xxl};
  font-size: 20px;
  height: ${p => `${p.theme.space[5] + 11}px`};

  @media ${device.tablet} {
    height: ${p => `${p.theme.space[5] + 16}px`};
  }
`;
