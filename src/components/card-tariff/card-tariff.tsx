import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './card-tariff.module.scss';
import { CashbackItem } from '../../ui/cash-back-item/cash-back-item';

export type CardTariffProps = {
  id?: number,
  logo: string,
  name: string,
  testPrice: number,
  testPeriod: number,
  price: number,
  period: number,
  monthPrice: number,
  cashBack: number | string,
  paymentStep: boolean,
  lastStep: boolean,
}

export const CardTariff: FC<CardTariffProps> = ({
  id,
  logo,
  name,
  testPrice,
  testPeriod,
  price,
  period,
  monthPrice,
  cashBack,
  paymentStep,
  lastStep 
}) => (
    <li className={styles.item}>
        <div className={styles.info}>
          <div className={`${lastStep} ? ${styles.infoName} :  ''`} >
            {(lastStep || paymentStep) && <img src={logo} alt='лого' />}
            <h1 className={styles.name}>{name}</h1>
          </div>
          {!paymentStep && 
            <p className={styles.text}>
              <span className={styles.span}>
                {`${testPrice} ₽`}
              </span>{`за ${testPeriod} дней`}
            </p>
          }
          {!paymentStep && 
            <p className={styles.text}>
              далее 
              <span className={styles.span}>
                {`${price} ₽`}
              </span>
              {`за ${period} дней`}
            </p>
          }
          {paymentStep &&
            <p className={styles.text}>
              <span className={styles.span}>
                {`${monthPrice} ₽`}
              </span>
              за месяц
            </p>
          }
          <p className={styles.greyText}>
            оплата ежемесячно
          </p>
        </div>
        <div className={styles.cashBackItem}>
        <CashbackItem sum={cashBack} unit='%'/>
        {!lastStep && !paymentStep &&
          <Link to={`/main/tariff/${id}`}
            className={styles.button}
            onClick={() => {}} >
            Оформить
          </Link>
        }
      </div>
    </li>
  );