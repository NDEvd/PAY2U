import { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './finish-tariff-page.module.scss';
import { tariffTest } from '../../utils/const';
import { CardTariff } from '../../components/card-tariff/card-tariff';
import { MainButton } from '../../ui/main-button/main-button';

import arrow from '../../images/Component 1.svg';

export const FinishTariffPage: FC = () => {
  const navigate = useNavigate();
  const id = tariffTest.id;
  return (
    <div className={styles.item}>
      <CardTariff
        logo={tariffTest.logo}
        name={tariffTest.name}
        testPrice={tariffTest.testPrice}
        testPeriod={tariffTest.testPeriod}
        price={tariffTest.price}
        monthPrice={tariffTest.monthPrice}
        period={tariffTest.period}
        cashBack={tariffTest.cashBack}
        lastStep
        paymentStep={false}
      />
      <div className={styles.itemButton}>
        <h2 className={styles.rules} >Условия начисления кешбека</h2>
        {/* <button className={styles.button} onClick={() => {navigate(`/service/tariff/${id}/cashbackinfo`)}}> */}
        <button className={styles.button} onClick={() => {navigate(`/error`)}} > 
          <img className={styles.rotate} src={arrow} alt='стрелка' />
        </button>
      </div>
      <p className={`${styles.contaner} ${styles.description}`}>{tariffTest.description}</p>
      <div className={styles.contaner} >
        <h2 className={styles.h}>Условия подключения прямой подписки</h2>
        <p className={styles.p}>При подключении прямой подписки действующая подписка останавливается, оплаченный период добавляется к новой подписке.</p>
      </div>
      <MainButton text='Оформить' onClick={() => {navigate(`/main/tariff/${id}/payment`)}} />
      <Outlet />
    </div> 
  );
};