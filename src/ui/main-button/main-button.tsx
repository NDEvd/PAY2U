import { FC } from 'react';
import styles from './main-button.module.scss';

type TMainButtonProps = {
  text: string;
  onClick: () => void;
}
export const MainButton: FC<TMainButtonProps> = ({ text, onClick }) => {
  
  return (
    <button className={styles.button} onClick={onClick}>{text}</button>
  );
}