import { FC, MouseEventHandler } from 'react';
import styles from './card-service.module.scss';
import up from '../../images/chevron-up.svg';
import { CashbackItem } from '../../ui/cash-back-item/cash-back-item';
import img from '../../images/gravity-ui_link.svg';

export type CardServiceProps = {
  isActiveTab: string;
  id?: number;
  name: string;
  logo: string;
  price: string | number;
  cashback: string | number;
  fromServis?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  // onClick: () => void;
  isActiveService?:boolean;
  isDirect?: boolean;
}

export const CardService: FC<CardServiceProps> = ({ 
  isActiveTab,
  name,
  logo,
  price,
  cashback,
  onClick,
  isDirect
}) => (
    <li className={`${styles.item} ${isActiveTab === 'tab-two' ? styles.itemGrey : ''}`}>
      <div className={styles.info}>
        <img className={styles.logo} src={logo} alt='лого' />
        <div>
          <div className={styles.nameItem}>
            <h1 className={styles.name}>
              {name}
            </h1>
            {isDirect && <img src={img} alt='скрепка' />}
          </div>
          <p className={styles.description}>
            от {price} р
          </p>
        </div>
      </div>
      <div className={styles.cashbackItem}>
        <CashbackItem sum={cashback} unit='%'/>
        <button className={styles.upFront} onClick={onClick}>
          <img src={up} alt='стрелка вперед' />
        </button>
      </div>
    </li>
  );