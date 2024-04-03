import { FC } from 'react';
import styles from './bank-app.module.scss';
import { useNavigate } from 'react-router-dom';
import imgOne from '../../images/promo-block.svg';
import imgTwo from '../../images/account-wrapper.svg';
import imgThree from '../../images/cards.svg';
import imgFour from '../../images/large.svg';
import imgFive from '../../images/standart-new.svg';
import imgSix from '../../images/large-1.svg';
import imgSeven from '../../images/w-375.svg';
import imgEight from '../../images/partner-offer-wrapper.svg';

export const BankApp: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.item}>
      <img src={imgFive} alt='информация о пользователе' />
      <img src={imgOne} alt='кэшбек' />
      <img src={imgTwo} alt='счета и карты' />
      <img src={imgSix} alt='заголовок' />
      <img src={imgThree} alt='продукты' />
      <img src={imgFour} alt='заголовок' />
      <button className={styles.itemApp} onClick={() => {navigate('/onboarding1st')}}>
        <img src={imgEight} alt='предложения партнеров' />
      </button>
      <img src={imgSeven} alt='навигация' />
    </div> 
  );
};