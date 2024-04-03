import { FC } from 'react';
import styles from './header.module.scss';
import back from '../../images/Component 1.svg';
import { CashbackItem } from '../../ui/cash-back-item/cash-back-item';

export const Header: FC = () => (
    <div className={styles.header}>
      <button className={styles.back}>
        <img src={back} alt='стрелка назад' />
        <h3 className={styles.textBack}>
          Назад в банк
        </h3>
      </button>
      <CashbackItem sum='300' unit='₽'/>
    </div>
  )