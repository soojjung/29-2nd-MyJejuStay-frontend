import React, { useState, useEffect } from 'react';
import DetailPageRating from './DetailPageRating';
import DetailPageMapButton from './DetailPageMapButton';
import styled from 'styled-components';

const DetailPageHeader = () => {
  const [accomodationData, setAccomodationData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  useEffect(() => {
    fetch(
      'http://localhost:3000/data/DetailPage/DetailPageHeader/DetailPage_Accomodations_Data.json'
    )
      .then(res => res.json())
      .then(res => {
        setAccomodationData(res);
      });
  }, []);

  useEffect(() => {
    fetch(
      'http://localhost:3000/data/DetailPage/DetailPageHeader/DetailPage_Reviews_Data.json'
    )
      .then(res => res.json())
      .then(res => setReviewData(res));
  }, []);

  return (
    <div>
      <StyledAccomodationSection>
        <StyledAccomodationHeader>
          <StyledAccomodationName>
            {accomodationData[0]?.name}
          </StyledAccomodationName>
          <DetailPageMapButton />
        </StyledAccomodationHeader>
        <StyledAccomodationDesc>
          {accomodationData[0]?.description}
        </StyledAccomodationDesc>
        <DetailPageRating score={reviewData[0]?.score} />
      </StyledAccomodationSection>
    </div>
  );
};

export default DetailPageHeader;

const StyledAccomodationSection = styled.section`
  width: 700px;
`;

const StyledAccomodationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin-bottom: 10px;
`;

const StyledAccomodationName = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

const StyledAccomodationDesc = styled.h3`
  color: #848c94;
  margin-bottom: 10px;
  font-size: 14px;
`;
