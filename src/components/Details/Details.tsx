import React from 'react';

import classes from './Details.module.css';
import { Button, Modal } from 'components';
import { useToggle } from 'utils/hooks';
import { API_ENDPOINTS, IMAGE_SIZES } from 'utils/constants';

const Details: React.FC<{
  backdropImg?: string;
  posterImg?: string;
  title?: string;
  genres?: Array<{ id: number; name: string }>;
  overview?: string;
  video?: any;
  onReturn: () => void;
}> = ({ backdropImg, posterImg, title, genres, overview, video, onReturn }) => {
  const [isOpenModal, setIsOpenModal] = useToggle(false);

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
          {posterImg && (
            <img
              className={classes.posterImg}
              src={API_ENDPOINTS.IMAGE(posterImg, IMAGE_SIZES.SMALL)}
              alt={title || 'Poster image'}
            />
          )}
          {video && (
            <div>
              <Button onClick={setIsOpenModal}>Play trailer</Button>
            </div>
          )}
        </div>

        <div className={classes.info}>
          <h1>{title}</h1>

          {genres && genres.map(g => <span key={g.id}>{g.name}</span>)}

          <p>{overview}</p>
        </div>
      </main>

      {video && (
        <Modal open={isOpenModal} onClose={setIsOpenModal}>
          <iframe title="Youtube video" width="600" height="350" src={API_ENDPOINTS.YOUTUBE(video.key)}></iframe>
        </Modal>
      )}
    </>
  );
};

export default Details;
