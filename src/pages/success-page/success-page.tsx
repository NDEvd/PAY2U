import { FC } from 'react';
import styles from './success-page.module.scss';
import img from '../../images/succes.png';

import { TextButton } from '../../ui/text-button/text-button';
import { MainButton } from '../../ui/main-button/main-button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from '../../services/store';
import { resetPromocode } from '../../services/slices';

export const SuccessPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const promocode = useSelector(state => state.services.promocode);

  const handleClick = () => {
    navigate('/main/');
    dispatch(resetPromocode());
  }
  
  return (
    <div className={styles.item}>
      <img src={img} alt='успех' />
      <div className={styles.promo}> 
        <span>{promocode.code}</span>
      </div>
      <p className={styles.textPromo} >{`Промокод действует до ${promocode.date}`}</p>
      <div className={`${styles.promo} ${styles.copy}`}>
        Скопировать и перейти к сервису
      </div>
      <TextButton text='Инструкция по работе с сервисом' link=''/>
      <TextButton text='Посмотреть чек' link=''/>
      <MainButton text='Вернуться на главную' onClick={handleClick} />
    </div>  
  );
};