import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const DetailPageRating = ({ score }) => {
  return (
    <div>
      <div>
        {STARS.slice(0, Math.round(score)).map(data => (
          <StyledStarRating key={data.id}>{data.star}</StyledStarRating>
        ))}
        {STARS_EMPTY.slice(0, 5 - Math.round(score)).map(data => (
          <StyledStarRating key={data.id}>{data.star}</StyledStarRating>
        ))}
        <StyledScore>{score}</StyledScore>
      </div>
    </div>
  );
};

export default DetailPageRating;

const STARS = [
  { id: 1, star: <FontAwesomeIcon icon={fasStar} /> },
  { id: 2, star: <FontAwesomeIcon icon={fasStar} /> },
  { id: 3, star: <FontAwesomeIcon icon={fasStar} /> },
  { id: 4, star: <FontAwesomeIcon icon={fasStar} /> },
  { id: 5, star: <FontAwesomeIcon icon={fasStar} /> },
];

const STARS_EMPTY = [
  { id: 1, star: <FontAwesomeIcon icon={faStar} /> },
  { id: 2, star: <FontAwesomeIcon icon={faStar} /> },
  { id: 3, star: <FontAwesomeIcon icon={faStar} /> },
  { id: 4, star: <FontAwesomeIcon icon={faStar} /> },
  { id: 5, star: <FontAwesomeIcon icon={faStar} /> },
];

const StyledStarRating = styled.span`
  color: #51abf3;
`;

const StyledScore = styled.span`
  margin-left: 5px;
`;
