import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    '--border-radius': '4px',
    '--padding': '0px',
    '--height': '8px',
  },
  medium: { '--border-radius': '4px', '--padding': '0px', '--height': '12px' },
  large: { '--border-radius': '8px', '--padding': '4px', '--height': '24px' },
};
const Wrapper = styled.div`
  box-sizing: border-box;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.gray50};
  border-radius: var(--border-radius);
  padding: var(--padding);
  height: var(--height);
`;

const Bar = styled.div`
  width: ${props => props.value}%;
  height: 100%;
  background-color: ${COLORS.primary};
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
  height: 100%;
`;
const ProgressBar = ({ value, size = 'medium' }) => {
  const style = STYLES[size];
  if (!style) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={style}
    >
      <BarWrapper>
        <Bar value={value}>
          <VisuallyHidden>{value}%</VisuallyHidden>
        </Bar>
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
