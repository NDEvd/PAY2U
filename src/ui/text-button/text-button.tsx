import { FC } from 'react';
import styles from './text-button.module.scss';
import { Link } from 'react-router-dom';

type TLinkButtonProps = {
  text: string;
  link: string;
}
export const TextButton: FC<TLinkButtonProps> = ({ text, link }) => (
    <Link className={styles.link} to={link}>{text}</Link>
  )