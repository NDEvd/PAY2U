import { FC } from 'react';
import styles from './success-page.module.scss';
import img from '../../images/succes.png';

import { TextButton } from '../../ui/text-button/text-button';
import { MainButton } from '../../ui/main-button/main-button';
import { useNavigate } from 'react-router-dom';

export const SuccessPage: FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className={styles.item}>
      <img src={img} alt="успех" />
      <div className={styles.promo}> 
        <span>1236-AO8PKF8Q</span>
      </div>
      <p className={styles.textPromo} >Промокод действует до 11 ноября 2024 года</p>
      <div className={`${styles.promo} ${styles.copy}`}>
        Скопировать и перейти к сервису
      </div>
      <TextButton text='Инструкция по работе с сервисом' link=''/>
      <TextButton text='Посмотреть чек' link=''/>
      <MainButton text='Вернуться на главную' onClick={() => navigate('/main/')} />
    </div>  
  );
};