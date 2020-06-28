import React, { memo } from 'react';

import classes from './Card.module.css';
import { Title, Text } from 'components';
import { POSTER_PLACEHOLDER, CARD_SIZES, API_ENDPOINTS, IMAGE_SIZES } from 'utils/constants';

const Card = memo(({ title, imgUrl, size = CARD_SIZES.DEFAULT, onClick }) => {
  return (
    <div className={size === CARD_SIZES.DEFAULT ? classes.card : classes.cardSm} onClick={onClick}>
      <div>
        <img
          className={size === CARD_SIZES.DEFAULT ? classes.img : classes.imgSm}
          src={imgUrl ? API_ENDPOINTS.IMAGE(IMAGE_SIZES.SMALL, imgUrl) : POSTER_PLACEHOLDER}
          alt={title}
        />
      </div>
      {CARD_SIZES.DEFAULT ? <Title centered>{title}</Title> : <Text>{title}</Text>}
    </div>
  );
});

export default Card;
