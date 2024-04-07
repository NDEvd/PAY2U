import { FC } from 'react';
import { useParams } from 'react-router-dom';
import styles from './payment-page.module.scss';
import { CardTariff } from '../../components/card-tariff/card-tariff';
import { Form } from '../../components/form/form';
import { useSelector } from '../../services/store';

export const PaymentPage: FC = () => {
  const params = useParams();
  const id = Number(params.id);
  const tariff = (useSelector(state => state.services.tariffList))[0].tariffs?.find(i => i.id === id);

  return(
    <div className={styles.item}>
    {tariff &&
      <CardTariff
        logo={tariff.logo}
        name={tariff.name}
        testPrice={tariff.test_price ? tariff.test_price.split('.')[0] : '0'}
        testPeriod={tariff.test_period}
        price={tariff.price ? tariff.price.split('.')[0] : '0'}
        monthPrice={tariff.month_price ? Math.floor(tariff.month_price) : 0}
        period={tariff.period}
        cashBack={tariff.cashback ? tariff.cashback.split('.')[0] : '0'}
        lastStep={false}
        paymentStep
      />
    }
    <Form />
    </div>  
  );
}