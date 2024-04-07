import { FC, useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import { CardService } from '../card-service/card-service';
import { useDispatch, useSelector } from '../../services/store';
import { fetchTariffList } from '../../services/actions';

import styles from './tabs-servises.module.scss';
import arrow from '../../images/Component 1.svg';

export const TabsServises: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isActiveTab, setIsActiveTab] = useState<string>('tab-one');
  const handlClickTab = (tabId: string) => {
    setIsActiveTab(tabId);
  }

  const [isOpenAllServices, setIsOpenAllServices] = useState<boolean>(false);
  const handlClickAll = () => {
    setIsOpenAllServices(!isOpenAllServices);
  }

  const [isOpenActiveServices, setIsOpenActiveServices] = useState<boolean>(true);
  const handlClickActive = () => {
    setIsOpenActiveServices(!isOpenActiveServices);
  }

  const [isOpenDisableServices, setIsOpenDisableServices] = useState<boolean>(false);
  const handlClickDisable = () => {
    setIsOpenDisableServices(!isOpenDisableServices);
  }

  const allServicies = useSelector(state => state.services.services);
  const servicies = isOpenAllServices ? allServicies : allServicies?.slice(0,3);

  const activeSubscriptions = useSelector(state => 
    state.services.subscriptions).filter(i => i.is_active === true);
  const disableSubscriptions = useSelector(state => 
    state.services.subscriptions).filter(i => i.is_active === false);

  const handlClickService = (id: number) => {
    dispatch(fetchTariffList(id));
    navigate(`/main/service/${id}`)
  }

return (
  <section data-tab>
    <div className={styles.tabs}>
      <a href='#/main?tab=one'
        data-trigger-tab='tab-one'
        className={`${styles.tab} ${isActiveTab === 'tab-one' ? styles.activeTab : ''}`}
        onClick={() => handlClickTab('tab-one')}>
        Мои
      </a>
      <a href='#/main?tab=two'
        data-trigger-tab='tab-two'
        className={`${styles.tab} ${isActiveTab === 'tab-two' ? styles.activeTab : ''}`}
        onClick={() => handlClickTab('tab-two')}>
        Каталог
      </a>
      <Link className={styles.search} to='/error' />
    </div>
    <div className='tab-content'>
      <div id='tab-one'
        data-content-tab className={`${styles.tabPaneSubs} ${isActiveTab === 'tab-one' ? styles.active : ''}`}>
        <div className={`${styles.tabPane} ${styles.active}`}>
          <h1 className={styles.title}>
            Активные подписки
          </h1>
          { isOpenActiveServices &&
            <ul className={styles.ul}>
              {activeSubscriptions?.map(({ name, logo, price, cashback, id, is_direct }) => (
              <CardService
                isActiveTab={isActiveTab}
                isDirect={is_direct}
                name={name}
                logo={logo}
                price={price.split('.')[0]}
                cashback={cashback.split('.')[0]}         
                key={id}
                onClick={() => navigate(`/error`)}
              />
              ))}
            </ul>
          }
          <button
            className={styles.buttonAll}
            onClick={handlClickActive}
          >
            <img src={arrow} alt='стрелка' 
              className={isOpenActiveServices ? styles.rotateUp : styles.rotateDown} />
          </button>
        </div>
        <div className={`${styles.tabPane} ${styles.active}`}>
          <h1 className={styles.title}>Неактивные подписки</h1>
        { isOpenDisableServices && 
          <ul className={styles.ul}>
              {disableSubscriptions?.map(({ name, logo, price, cashback, id, is_direct }) => (
              <CardService
                isActiveTab='tab-two'
                isDirect={is_direct}
                name={name}
                logo={logo}
                price={price.split('.')[0]}
                cashback={cashback.split('.')[0]}         
                key={id}
                onClick={() => navigate(`/error`)}
              />
              ))}
            </ul>
          }
          <button className={styles.buttonAll}
            onClick={handlClickDisable}          
          >
            <img src={arrow} alt='стрелка' className={isOpenDisableServices ? styles.rotateUp : styles.rotateDown} />
          </button>
        </div>
      </div>
      <div id='tab-two'
        data-content-tab className={`${styles.tabPane} ${isActiveTab === 'tab-two' ? styles.active : ''}`}>
        <ul className={styles.ul}>
          {servicies?.map(({ name, logo, min_tariff_price, cashback, id }) => (
          <CardService
            isActiveTab={isActiveTab}
            name={name}
            logo={logo}
            price={min_tariff_price ? min_tariff_price : 100}
            cashback={cashback ? cashback : 3}         
            key={id}
            // onClick={() => navigate(`/main/service/${id}`)}
            onClick={() => handlClickService(id)}
          />
          ))}
        </ul>
        <button className={styles.buttonAll} onClick={handlClickAll}>
          {isOpenAllServices ? 'Свернуть' : 'Смотреть все'}
        </button>
      </div>
    </div>
  </section>
);
}