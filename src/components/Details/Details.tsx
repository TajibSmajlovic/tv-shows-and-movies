import React from 'react';

import classes from './Details.module.css';
import { Button, Modal } from 'components';
import { useToggle } from 'utils/hooks';
import { API_ENDPOINTS, IMAGE_SIZES, POSTER_PLACEHOLDER } from 'utils/constants';

interface Props {
  backdropImg?: string;
  posterImg?: string;
  title?: string;
  genres?: Array<{ id: number; name: string }>;
  overview?: string;
  video?: { key: string };
  rating?: number;
  onReturn: () => void;
}

const Details: React.FC<Props> = ({ backdropImg, posterImg, title, genres, overview, video, rating, onReturn }) => {
  const [isOpenModal, setIsOpenModal] = useToggle(false);

  const handleIFrameWidth = () => {
    let width: number = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    return width <= 610 ? width * 0.8 : 600;
  };

  return (
    <>
      {backdropImg && (
        <img
          className={classes.backdropImg}
          src={API_ENDPOINTS.IMAGE(backdropImg)}
          alt={title || 'Backdrop image'}
        ></img>
      )}

      <header className={classes.header}>
        <Button onClick={onReturn}>Back</Button>
      </header>

      <main className={classes.main}>
        <div className={classes.poster}>
          <>
            {rating && rating !== 0 && <span className={classes.rating}>{rating}</span>}
            <img
              className={classes.posterImg}
              src={posterImg ? API_ENDPOINTS.IMAGE(posterImg, IMAGE_SIZES.SMALL) : POSTER_PLACEHOLDER}
              alt={title || 'Poster image'}
            />
          </>

          {video && (
            <div>
              <Button onClick={setIsOpenModal}>Play trailer</Button>
            </div>
          )}
        </div>

        <div className={rating ? [classes.info, classes.infoWithRating].join(' ') : classes.info}>
          <h1>{title}</h1>

          {genres && genres.map(g => <span key={g.id}>{g.name}</span>)}

          <p>{overview}</p>
        </div>
      </main>

      {video && (
        <Modal open={isOpenModal} onClose={setIsOpenModal}>
          <iframe
            title={title}
            allowFullScreen
            height="340"
            width={handleIFrameWidth()}
            src={API_ENDPOINTS.YOUTUBE(video.key)}
          />
        </Modal>
      )}
    </>
  );
};

export default Details;
