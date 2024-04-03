import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './error.module.scss';
import close from '../../images/x.svg';
import img from '../../images/Computer troubleshooting-pana 1.png';

export const Error: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.bg}>
      <div className={styles.item}>
        <button className={styles.closeButton} onClick={() => {navigate(-1)}}>
          <img src={close} alt='закрыть' />
        </button>
        <img className={styles.image} src={img} alt='рабочий у ПК' />
        <h1 className={styles.textM}>
          Страница пока в разработке
        </h1>
        <h2 className={styles.textS}>
          Совсем скоро она будет готова!
        </h2>
      </div>
    </div>
  );
};