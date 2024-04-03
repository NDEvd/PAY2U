import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './onboarding.module.scss';
import close from '../../images/x.svg';

import { OnboardingDefenition } from '../../components/onboarding-defenition/onboarding-defenition';
import { MainButton } from '../../ui/main-button/main-button';

type TOnboardingProps = {
  progressValue: string
  pageCount: string,
  title: string,
  image: string,
  buttonText: string,
  onClick: () => void,
}

export const Onboarding: FC<TOnboardingProps> = ({ progressValue, pageCount, title, image, buttonText, onClick }) => {
  const location = useLocation();
  const isThirdPage = location.pathname.includes('onboarding3d');
  const navigate = useNavigate();
  return (
    <div className={styles.bg}>
      <div className={styles.item}>
        <button className={isThirdPage ? styles.closeButton : styles.topButton} onClick={() => {navigate('/main')}}>
          {isThirdPage ? '' : 'Пропустить'}
          {isThirdPage &&
            <img src={close} alt='закрыть' />
          }
        </button>
        <progress value={progressValue} max='100' className={styles.progress} />
        <span className={`${styles.textS} ${styles.span}`}>
          {pageCount}
        </span>
        <h1 className={`${styles.textM} ${styles.title}`}>
          {title}
        </h1>
        <img className={styles.image} src={image} alt='пользователь с телефоном' />
        <OnboardingDefenition />
        <div className={styles.lastElement}>
          <MainButton text={buttonText} onClick={onClick} />
        </div>
      </div>
    </div>
  );
};