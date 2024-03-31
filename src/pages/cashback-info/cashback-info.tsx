import { FC } from 'react';
import styles from './cashback-info.module.scss';

export const CashbackInfo: FC = () => {
  
  return (
    <p className={styles.text}>
      Кэшбэк подтверждается и зачисляется в течение 30 - 60 дней
    Кэшбэк по заказу может отобразиться в течение 3-х дней с момента покупки подписки.
    Кэшбэк начисляется за автопродления (только 3 платных продления), в т.ч. после оформления триала.
    Сумма кэшбэка определяется по итоговой стоимости оплаты, без учёта полученных скидок.
    Стоимость доставки не учитывается при начислении кэшбэка.
    Максимальная сумма кэшбэка может отличаться в зависимости от условий конкретного магазина.
    Кэшбэк распространяется на сумму гарантии по решению сервиса Иви.
    </p>
  );
};