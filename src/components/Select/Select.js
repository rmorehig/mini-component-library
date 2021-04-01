import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
`;

const PresentationalSelect = styled.div`
  background-color: ${COLORS.gray50};
  color: ${COLORS.gray500};
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 52px;
  ${NativeSelect}:focus + & {
    outline: 5px auto ${COLORS.primary};
  }
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 24px;
  pointer-events: none;
`;
const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalSelect>
        {displayedValue}
        <SelectIcon id="chevron-down" size={24} stroke={1} />
      </PresentationalSelect>
    </Wrapper>
  );
};

export default Select;
