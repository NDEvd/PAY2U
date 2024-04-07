import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './info-dialogue.module.scss';
import close from '../../images/x.svg';
import sync from '../../images/sync_black.svg';

type InfoDialogueProps = {
  img: string;
  alt: string;
  isVisible: boolean;
  mainText: string;
  textButton: string;
  onClick: () => void;
}

export const InfoDialogue: FC<InfoDialogueProps> = ({ img, alt, isVisible, mainText, textButton, onClick }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.bg}>
      <div className={styles.item}>
        <button className={styles.closeButton} onClick={() => {navigate(-1)}}>
          <img src={close} alt='закрыть' />
        </button>
        <img className={styles.image} src={img} alt={alt} />
        <h1 className={styles.textM}>
          {mainText}
        </h1>
        { isVisible &&
          <h2 className={styles.textS}>
            <span className={styles.sync}>
              <img src={sync} alt="скрепка" />
            </span>
              — так выглядит иконка синхронизированных подписок
          </h2>
        }
        <button className={styles.button} onClick={onClick}>
          {textButton}
        </button>
      </div>
    </div>
  );
};