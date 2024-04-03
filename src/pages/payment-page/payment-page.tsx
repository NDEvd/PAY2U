import { FC } from 'react';
import styles from './payment-page.module.scss';
import { tariffTest } from '../../utils/const';
import { CardTariff } from '../../components/card-tariff/card-tariff';
import { Form } from '../../components/form/form';

export const PaymentPage: FC = () => (
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
        lastStep={false}
        paymentStep
      />
      <Form />
    </div>  
  );