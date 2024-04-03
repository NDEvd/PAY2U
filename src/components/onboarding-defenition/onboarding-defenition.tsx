import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './onboarding-defenition.module.scss';

export const OnboardingDefenition: FC = () => {
  const location = useLocation();
  const isFirstPage = location.pathname.includes('onboarding1st');
  const isSecondPage = location.pathname.includes('onboarding2d');
  const isThirdPage = location.pathname.includes('onboarding3d');
  
  return (
    <>
      {isFirstPage && 
        <>
          <p className={styles.text}>Все подписки — уже в приложении банка</p>
          <ul className={styles.ul}>
            <li className={styles.text}>Удобное управление и защита данных</li>
            <li className={styles.text}>Контроль списаний и начислений</li>
          </ul>
        </>
      }
      {isSecondPage && 
        <>
        <p className={styles.text}>Кешбек или скидка от 10% с каждой оплаты</p>
        <p className={styles.text}>Пробный период с быстрой активацией</p>
        </>
      }
      {isThirdPage && 
        <ul className={styles.ul}>
          <li className={styles.text}>Запустите поиск по сервисам</li>
          <li className={styles.text}>Перенесите уже оформленные подписки</li>
          <li className={styles.text}>Платите меньше, получайте больше выгод</li>
      </ul>
      }
    </>
)};