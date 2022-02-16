import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DetailPageInfo = () => {
  const [accomodationData, setAccomodationData] = useState([]);

  useEffect(() => {
    fetch('http://10.58.3.251:8000/accommodations')
      .then(res => res.json())
      .then(res => {
        setAccomodationData(res);
      });
  }, []);

  return (
    <div>
      <StyledAccomodationInfoTitle>숙소정보</StyledAccomodationInfoTitle>
      <StyledCheckWrapper>
        <div>
          <h3>체크인</h3>
          <StyledCheckInOut>
            {accomodationData.message[0]?.check_in_time}
          </StyledCheckInOut>
        </div>
        <div>
          <h3>체크아웃</h3>
          <StyledCheckInOut>
            {accomodationData.message[0]?.check_out_time}
          </StyledCheckInOut>
        </div>
      </StyledCheckWrapper>
      <div>
        <StyledIntro>숙소 소개</StyledIntro>
        <p>{accomodationData.message[0]?.detail_description}</p>
      </div>
    </div>
  );
};

const StyledAccomodationInfoTitle = styled.div`
  font-size: 22px;
  margin: 32px 0 16px 0;
`;

const StyledCheckWrapper = styled.div`
  display: flex;
  width: 700px;
`;

const StyledCheckInOut = styled.h2`
  font-size: 24px;
  color: #495056;
  font-weight: 300;
  margin-top: 12px;
  width: 340px;
`;

const StyledIntro = styled.h3`
  margin: 20px 0;
`;

export default DetailPageInfo;
