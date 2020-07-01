import React, { memo } from 'react';

import classes from './Card.module.css';
import { Title } from 'components';
import { POSTER_PLACEHOLDER, CARD_SIZES, API_ENDPOINTS, IMAGE_SIZES } from 'utils/constants';

interface Props {
  title: string;
  imgUrl?: string;
  size?: string;
  onClick: () => void;
}

const Card: React.FC<Props> = memo(({ title, imgUrl, size = CARD_SIZES.DEFAULT, onClick }) => (
  <div className={size === CARD_SIZES.DEFAULT ? classes.card : classes.cardSm} onClick={onClick}>
    <div>
      <img
        className={size === CARD_SIZES.DEFAULT ? classes.img : classes.imgSm}
        src={imgUrl ? API_ENDPOINTS.IMAGE(imgUrl, IMAGE_SIZES.SMALL) : POSTER_PLACEHOLDER}
        alt={title}
      />
    </div>

    <Title centered>{title}</Title>
  </div>
));

export default Card;
