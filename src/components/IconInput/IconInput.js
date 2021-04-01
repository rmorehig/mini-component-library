import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;
const Input = styled.input`
  border: none;
  color: inherit;
  border-bottom: var(--border-width) solid ${COLORS.black};
  padding-left: var(--height);
  width: var(--width);
  height: var(--height);
  font-weight: 700;
  font-size: var(--font-size);
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  &:focus {
    outline-offset: 2px;
  }
`;
const STYLES = {
  small: {
    iconSize: 16,
    borderWidth: 1,
    height: 24,
    fontSize: 16,
  },
  large: {
    iconSize: 24,
    borderWidth: 2,
    height: 36,
    fontSize: 18,
  },
};
const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size];
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper
        style={{
          '--size': `${styles.iconSize}px`,
        }}
      >
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <Input
        style={{
          '--border-width': `${styles.borderWidth}px`,
          '--width': `${width}px`,
          '--height': `${styles.height}px`,
          '--font-size': `${styles.fontSize / 16}rem`,
        }}
        {...delegated}
      />
    </Wrapper>
  );
};

export default IconInput;
