import React, { memo } from 'react';

import classes from './Card.module.css';
import { Title, Text } from 'components';
import { POSTER_PLACEHOLDER, CARD_SIZES, API_ENDPOINTS, IMAGE_SIZES } from 'utils/constants';

const Card: React.FC<{ title: string; imgUrl: string; size?: string; onClick: () => void }> = memo(
  ({ title, imgUrl, size = CARD_SIZES.DEFAULT, onClick }) => (
    <div className={size === CARD_SIZES.DEFAULT ? classes.card : classes.cardSm} onClick={onClick}>
      <div>
        <img
          className={size === CARD_SIZES.DEFAULT ? classes.img : classes.imgSm}
          src={imgUrl ? API_ENDPOINTS.IMAGE(imgUrl, IMAGE_SIZES.SMALL) : POSTER_PLACEHOLDER}
          alt={title}
        />
      </div>
      {CARD_SIZES.DEFAULT ? <Title centered>{title}</Title> : <Text>{title}</Text>}
    </div>
  )
);

export default Card;
