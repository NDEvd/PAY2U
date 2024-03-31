import { FC } from 'react';
import styles from './title.module.scss';

type TTitleProps = {
  title: string;
}
export const Title: FC<TTitleProps> = ({ title }) => {
  
  return (
    <h1 className={styles.title}>
      {title}
    </h1>
  );
}