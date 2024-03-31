import { FC } from 'react';
import crown from '../../images/crown.svg';
import styles from './cash-back-item.module.scss';

type CashbackItemProps = {
  sum: string | number;
  unit: string;
}
export const CashbackItem: FC<CashbackItemProps> = ({ sum, unit }) => {
  
  return (
    <div className={styles.item}>
        <img src={crown} alt="корона" />
        <span className={styles.crownItemTetx}>{`${sum} ${unit}`}</span>
    </div>
  );
}