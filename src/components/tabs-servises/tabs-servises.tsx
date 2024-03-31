import { FC, useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import { servicies, subscription } from '../../utils/const';
import { CardService } from '../card-service/card-service';

import styles from './tabs-servises.module.scss';
import arrow from '../../images/Component 1.svg';


export const TabsServises: FC = () => {
  const [isActive, setIsActive] = useState<string>('tab-one');
  const handlClick = (tabId: string) => {
    setIsActive(tabId);
  }

  const navigate = useNavigate();

return (
  <section data-tab>
    <div className={styles.tabs}>
      <a href="#" data-trigger-tab="tab-one"
        className={`${styles.tab} ${isActive === 'tab-one' ? styles.activeTab : ''}`}
        onClick={() => handlClick('tab-one')}>Мои</a>
      <a href="#" data-trigger-tab="tab-two"
        className={`${styles.tab} ${isActive === 'tab-two' ? styles.activeTab : ''}`}
        onClick={() => handlClick('tab-two')}>Каталог</a>
      <Link className={styles.search} to='/search' />
    </div>
    <div className="tab-content">
      <div id="tab-one" data-content-tab className={`${styles.tabPaneSubs} ${isActive === 'tab-one' ? styles.active : ''}`}>
        <div className={`${styles.tabPane} ${styles.active}`}>
          <h1 className={styles.title}>Активные подписки</h1>
          <ul className={styles.ul}>
            {subscription.map(({ name, logo, price, cashBack, id }) => (
            <CardService
              isActive={isActive}
              name={name}
              logo={logo}
              price={price}
              cashBack={cashBack}         
              key={id}
              onClick={() => navigate(`/subscribtion/${id}`)}
            />
            ))}
          </ul>
          <button className={styles.buttonAll}><img src={arrow} alt="стрелка" className={styles.rotateUp} /></button>
          </div>
          <div className={`${styles.tabPane} ${styles.active} ${styles.tabPaneClose}`}>
            <h1 className={styles.title}>Неактивные подписки</h1>
            <button className={styles.buttonAll}><img src={arrow} alt="стрелка" className={styles.rotateDown} /></button>
          </div>
        </div>
        <div id="tab-two" data-content-tab className={`${styles.tabPane} ${isActive === 'tab-two' ? styles.active : ''}`}>
          <ul className={styles.ul}>
            {servicies.map(({ name, logo, price, cashBack, id }) => (
            <CardService
              isActive={isActive}
              name={name}
              logo={logo}
              price={price}
              cashBack={cashBack}         
              key={id}
              onClick={() => navigate(`/main/service/${id}`)}
            />
            ))}
          </ul>
          <button className={styles.buttonAll}>Смотреть все</button>
        </div>
      </div>
    {/* </div> */}
  </section>
);
}