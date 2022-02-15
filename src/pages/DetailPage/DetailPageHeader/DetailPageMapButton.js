import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const DetailPageMapButton = () => {
  return (
    <div>
      <StyledButton>
        <FontAwesomeIcon icon={faMap} color="#51abf3" />
        <StyledButtonText>위치 보기</StyledButtonText>
      </StyledButton>
    </div>
  );
};

export default DetailPageMapButton;

const StyledButton = styled.button`
  width: 120px;
  height: 40px;
  padding: 0 16px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  }
`;

const StyledButtonText = styled.span`
  margin-left: 10px;
  font-size: 14px;
`;
