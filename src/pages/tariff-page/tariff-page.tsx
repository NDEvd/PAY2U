import { FC } from 'react';
import styles from './tariff-page.module.scss';
import { Title } from '../../ui/title/title';
import logo from '../../images/image 23001.svg';
import { tariffsTest } from '../../utils/const';
import { CardTariff } from '../../components/card-tariff/card-tariff';

export const TariffPage: FC = () => {
  
  return (
    <div className={styles.item}>
      <div className={styles.contaner}>
        <img src={logo} alt="лого" />
        <div className={styles.text}>
          <p>
            Подписка Иви это огромный каталог фильмов и сериалов, доступный без рекламы 
              и в лучшем качестве.
          </p>
          <p>
            Иви помогает найти свое кино каждому. 
          </p>
        </div>
      </div>
      <button className={styles.search}>Найти прямую подписку</button>
      <Title title='Выбор тарифного плана' />
      <ul className={styles.ul}>
        {tariffsTest.map(( tariffInfo ) => (
          <CardTariff
            key={tariffInfo.id}
            id={tariffInfo.id}
            logo={tariffInfo.logo}
            name={tariffInfo.name}
            testPrice={tariffInfo.testPrice}
            testPeriod={tariffInfo.testPeriod}
            price={tariffInfo.price}
            monthPrice={tariffInfo.monthPrice}
            period={tariffInfo.period}
            cashBack={tariffInfo.cashBack}
            lastStep={false}
            paymentStep={false}
          />
        ))}
      </ul>
      <button className={`${styles.search} ${styles.link}`}>Перейти на сайт подписки</button>
    </div>
  );
};