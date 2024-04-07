import { FC } from 'react';
import styles from './tariff-page.module.scss';
import { useNavigate } from 'react-router-dom';
import { Title } from '../../ui/title/title';
// import logo from '../../images/logo.png';
// import { tariffsTest } from '../../utils/const';
import { CardTariff } from '../../components/card-tariff/card-tariff';
import { useSelector } from '../../services/store';
import { TTariff } from '../../utils/types';

export const TariffPage: FC = () => {
  const navigate = useNavigate();
  const service = (useSelector(state => state.services.tariffList))[0];
  const tariffsList: TTariff[] = service?.tariffs;

  return (
    <div className={styles.item}>
      <div className={styles.contaner}>
        <img className={styles.logo} src={service?.logo} alt='лого' />
        <div className={styles.text}>
          <p>{service?.description}</p>
        </div>
      </div>
      <button className={styles.search} onClick={() => {navigate(`/error`)}} >
        Найти прямую подписку
      </button>
      <Title title='Выбор тарифного плана' />
      {tariffsList &&
        <ul className={styles.ul}>
        {tariffsList.map(( tariffInfo ) => (
          <CardTariff
            key={tariffInfo.id}
            id={tariffInfo.id}
            logo={tariffInfo.logo}
            name={tariffInfo.name}
            testPrice={tariffInfo.test_price ? tariffInfo.test_price.split('.')[0] : '0'}
            testPeriod={tariffInfo.test_period}
            price={tariffInfo.price ? tariffInfo.price.split('.')[0] : '0'}
            monthPrice={tariffInfo.month_price}
            period={tariffInfo.period}
            cashBack={tariffInfo.cashback ? tariffInfo.cashback.split('.')[0] : '0'}
            lastStep={false}
            paymentStep={false}
          />
        ))}
        </ul>
      }
      <button className={`${styles.search} ${styles.link}`} onClick={() => {navigate(`/error`)}} >
        Перейти на сайт подписки
      </button>
    </div>
  );
};