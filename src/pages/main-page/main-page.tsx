import { FC } from 'react';
import styles from './main-page.module.scss';
import { Header } from '../../components/header/header';
import { Title } from '../../ui/title/title';
import { Story } from '../../components/story/story';
import { TabsServises } from '../../components/tabs-servises/tabs-servises';
import { MainButton } from '../../ui/main-button/main-button';
import { Outlet, useNavigate } from 'react-router-dom';

export const MainPage: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.bg}>
        <Header />
        <div className={styles.item}>
          <div className={styles.topItem}>
            <span className={styles.sum}>598 ₽</span>
            <p className={styles.date}>Списано в марте</p>
          </div>
          <div className={styles.topItem}>
            <span className={styles.sum}>299 ₽</span>
            <p className={styles.date}>Спишется 3 апреля</p>
          </div>
        </div>
        <MainButton text='Синхронизировать подписки' onClick={() => {navigate(`/error`)}}/>
        <Title title='Актуальное' />
        <Story />
        <Title title='Сервисы' />
        <TabsServises />
      </div>
      <Outlet />
    </>
  );
};