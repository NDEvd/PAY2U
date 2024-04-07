import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../images/payment-error.png';
import { InfoDialogue } from '../../components/info-dialogue/info-dialogue';

export const PaymentErrorPage: FC = () => {
  const navigate = useNavigate();

  return (
    <InfoDialogue
      img={img}
      alt='нет данных'
      isVisible={false}
      mainText='Не удалось оформить подписку'
      textButton='Попробовать еще раз'
      onClick={() => {navigate(-1)}} />
  );
};