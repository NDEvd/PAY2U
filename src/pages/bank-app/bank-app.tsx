import { FC } from 'react';
import styles from './bank-app.module.scss';
import { useNavigate } from 'react-router-dom';


export const BankApp: FC = () => {
  const navigate = useNavigate();
  return (
    <button className={styles.item} onClick={() => {navigate('/onboarding1st')}}>
      <h1>Управление подписками с высоким % кешбэка</h1>
    </button> 
  );
};