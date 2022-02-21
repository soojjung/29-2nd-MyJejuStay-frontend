import React, { useState, useEffect } from 'react';
import DetailPageRating from './DetailPageRating';
import DetailPageMapButton from './DetailPageMapButton';
import styled from 'styled-components';

const DetailPageHeader = () => {
  const [accommodationData, setAccommodationData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  useEffect(() => {
    fetch(
      'data/DetailPage/DetailPageHeader/DetailPage_Accommodations_Data.json'
    )
      .then(res => res.json())
      .then(res => {
        setAccommodationData(res);
      });
  }, []);

  useEffect(() => {
    fetch('data/DetailPage/DetailPageHeader/DetailPage_Reviews_Data.json')
      .then(res => res.json())
      .then(res => setReviewData(res));
  }, []);

  return (
    <div>
      <StyledAccommodationSection>
        <StyledAccommodationHeader>
          <StyledAccommodationName>
            {accommodationData[0]?.name}
          </StyledAccommodationName>
          <DetailPageMapButton />
        </StyledAccommodationHeader>
        <StyledAccommodationDesc>
          {accommodationData[0]?.description}
        </StyledAccommodationDesc>
        <DetailPageRating score={reviewData[0]?.score} />
      </StyledAccommodationSection>
    </div>
  );
};

export default DetailPageHeader;

const StyledAccommodationSection = styled.section`
  width: 700px;
`;

const StyledAccommodationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin-bottom: 10px;
`;

const StyledAccommodationName = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

const StyledAccommodationDesc = styled.h3`
  color: #848c94;
  margin-bottom: 10px;
  font-size: 14px;
`;
