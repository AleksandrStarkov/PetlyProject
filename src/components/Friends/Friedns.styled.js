import styled from 'styled-components';
import { device } from '../../utils/device';

export const StyledWrapper = styled.div`
  display: grid;
  gap: 40px;
  justify-content: center;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 32px 60px;
  }
  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
