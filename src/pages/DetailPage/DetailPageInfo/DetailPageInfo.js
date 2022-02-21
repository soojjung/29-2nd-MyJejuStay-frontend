import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DetailPageInfoCheckInOut from './DetailPageInfoCheckInOut';
import { api } from '../../../api/config';

const DetailPageInfo = () => {
  const [accomodationData, setAccomodationData] = useState([]);

  useEffect(() => {
    fetch(`${api.fetchAccommodationItem}/1`)
      .then(res => res.json())
      .then(res => {
        setAccomodationData(res);
      });
  }, []);

  return (
    <div>
      <StyledAccomodationInfoTitle>숙소정보</StyledAccomodationInfoTitle>
      <StyledCheckWrapper>
        {ACCOMMODATION_DATA_TITLE.map(({ id, title, label }) => (
          <DetailPageInfoCheckInOut
            key={id}
            title={title}
            accomodationData={
              accomodationData && accomodationData.message[0][label]
            }
          />
        ))}
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

const StyledIntro = styled.h3`
  margin: 20px 0;
`;

const ACCOMMODATION_DATA_TITLE = [
  {
    id: 1,
    title: '체크인',
    label: 'check_in_time',
  },
  { id: 2, title: '체크아웃', label: 'check_out_time' },
];

export default DetailPageInfo;
