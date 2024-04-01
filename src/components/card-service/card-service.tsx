import { FC } from 'react';
import styles from './card-service.module.scss';
import up from '../../images/chevron-up.svg';
import { CashbackItem } from '../../ui/cash-back-item/cash-back-item';
import img from '../../images/gravity-ui_link.svg';
// import store, { useSelector, useDispatch } from '../../services/store';

export type CardServiceProps = {
  id?: string,
  isActive: string,
  name: string,
  logo: string,
  price: number,
  cashBack: number,
  fromServis?: boolean,
  onClick: () => void,
  isActiveService?:boolean,
  isDirect?: boolean,
}

export const CardService: FC<CardServiceProps> = ({isActive, name, logo, price, cashBack, onClick, isDirect }) => {
  
  return (
    <li className={`${styles.item} ${isActive === 'tab-two' ? styles.itemGrey : ''}`}>
        <div className={styles.info}>
          <img src={logo} alt="лого" />
          <div>
            <div className={styles.nameItem}>
              <h1 className={styles.name}>{name}</h1>
              {isDirect && <img src={img} alt="скрепка" />}
            </div>
            <p className={styles.description}>от {price} р</p>
          </div>
        </div>
        <div className={styles.cashBackItem}>
        <CashbackItem sum={cashBack} unit='%'/>
        <button className={styles.upFront} onClick={onClick}>
          <img src={up} alt="стрелка вперед" />
        </button>
        </div>
    </li>
  );
};