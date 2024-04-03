import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import arrow from '../../images/arrowBack.svg';
import styles from './arrow-back-button.module.scss';

export const ArrowBackButton: FC = () => {
  const navigate = useNavigate();
  return (
    <button className={styles.arrow} onClick={() => {navigate(-1)}}>
      <img className={styles.arrowImg} src={arrow} alt='стрелка назад' />
    </button>
  );
}