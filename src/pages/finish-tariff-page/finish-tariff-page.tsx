import { FC } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import styles from './finish-tariff-page.module.scss';
import { CardTariff } from '../../components/card-tariff/card-tariff';
import { MainButton } from '../../ui/main-button/main-button';
import { useSelector } from '../../services/store';

import arrow from '../../images/Component 1.svg';

export const FinishTariffPage: FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);
  const tariff = (useSelector(state => state.services.tariffList))[0].tariffs.find(i => i.id === id);
  return (
    <div className={styles.item}>
      {tariff &&
        <CardTariff
          logo={tariff.logo}
          name={tariff.name}
          testPrice={tariff.test_price ? tariff.test_price.split('.')[0] : '0'}
          testPeriod={tariff.test_period}
          price={tariff.price ? tariff.price.split('.')[0] : '0'}
          monthPrice={tariff.month_price}
          period={tariff.period}
          cashBack={tariff.cashback ? tariff.cashback.split('.')[0] : '0'}
          lastStep={true}
          paymentStep={false}
        />
      }
      <div className={styles.itemButton}>
        <h2 className={styles.rules} >Условия начисления кешбека</h2>
        {/* <button className={styles.button} onClick={() => {navigate(`/service/tariff/${id}/cashbackinfo`)}}> */}
        <button className={styles.button} onClick={() => {navigate(`/error`)}} > 
          <img className={styles.rotate} src={arrow} alt='стрелка' />
        </button>
      </div>
      <p className={`${styles.contaner} ${styles.description}`}>{tariff?.description}</p>
      <div className={styles.contaner} >
        <h2 className={styles.h}>Условия подключения прямой подписки</h2>
        <p className={styles.p}>При подключении прямой подписки действующая подписка останавливается, оплаченный период добавляется к новой подписке.</p>
      </div>
      <MainButton text='Оформить' onClick={() => {navigate(`/main/tariff/${id}/payment`)}} />
      <Outlet />
    </div> 
  );
};