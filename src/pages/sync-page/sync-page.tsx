import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../images/bro.png';
import { InfoDialogue } from '../../components/info-dialogue/info-dialogue';

export const SyncPage: FC = () => {
  const navigate = useNavigate();
  return (
    <InfoDialogue
      img={img}
      alt='рабочий у ПК'
      isVisible
      mainText='Все ваши подписки синхронизированы!'
      textButton='Вернуться на главную'
      onClick={() => {navigate('/main')}} />
  );
};