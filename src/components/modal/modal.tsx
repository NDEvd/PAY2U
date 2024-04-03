import { FC, useEffect, ReactNode } from 'react';
import styles from './modal.module.scss';
import { useNavigate } from 'react-router-dom';

import { ArrowBackButton } from '../../ui/arrow-back-button/arrow-back-button';
import { Title } from '../../ui/title/title';

type TModalProps = {
  title: string;
  isTitle: boolean;
  children?: ReactNode;
};

export const Modal: FC<TModalProps> = ({ title, isTitle, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handlClose = () => {
    navigate('/main/');
  };
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      e.key === 'Escape' && handlClose();
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [handlClose]);

  const navigate = useNavigate();

  return (
    <>
    <div className={styles.item}>
      <div className={styles.overlay}
        onClick={handlClose}
        role='presentation'
      />
      <div className={styles.modal}>
        {isTitle && 
          <ArrowBackButton />
        }
        {isTitle && 
          <Title title={title} />
        }
        <div>
          {children}
        </div>
      </div>
    </div>  
    </>
  );
};