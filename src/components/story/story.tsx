import { FC } from 'react';
import styles from './story.module.scss';
import storyOne from '../../images/Story_1 (2).png';
import storyTwo from '../../images/Story_2 (1).png';
import storyThree from '../../images/Story_3.png';

export const Story: FC = () => (
    <div className={styles.story}>
      <img src={storyOne} alt='онбординг' />
      <img src={storyTwo} alt='новый тариф' />
      <img src={storyThree} alt='яндекс музыка' />
    </div>
  )