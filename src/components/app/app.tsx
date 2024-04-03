import { Route, Routes, useNavigate } from 'react-router-dom';
import { Onboarding } from '../../pages/onboarding/onboarding';
import { MainPage } from '../../pages/main-page/main-page';
import { TariffPage } from '../../pages/tariff-page/tariff-page';
import { FinishTariffPage } from '../../pages/finish-tariff-page/finish-tariff-page';
import { Modal } from '../../components/modal/modal';
import { PaymentPage } from '../../pages/payment-page/payment-page';
import { SuccessPage } from '../../pages/success-page/success-page';

import imgStepOne from '../../images/image_onboarding1.png';
import imgStepTwo from '../../images/image_onboarding2.png';
import imgStepThree from '../../images/Image_onboarding3.png';
import { CashbackInfo } from '../../pages/cashback-info/cashback-info';
import { BankApp } from '../../pages/bank-app/bank-app';
import { Error } from '../../pages/error/error';
import { useEffect } from 'react';

import { useDispatch } from '../../services/store';
import { setServices, setSubscriptions } from '../../services/slices';
import { servicies, subscription } from '../../utils/const';

// import { fetchServices } from '../../services/actions';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setSubscriptions(subscription));
  }, [dispatch])

  useEffect(() => {
    dispatch(setServices(servicies));
  }, [dispatch])
  // useEffect(() => {
  //   dispatch(fetchServices( ));
  // }, [dispatch])
 
  const navigate = useNavigate();

  const handleClickFirstPage = () => {
    navigate('/onboarding2d');
  }

  const handleClickSecondPage = () => {
    navigate('/onboarding3d');
  }

  const handleClickThirdPage = () => {
    navigate('/main');
  }

  return (
    <Routes>
        <Route path='/' element={<BankApp />} />
        <Route path='/onboarding1st' element={
          <Onboarding
            progressValue='33'
            pageCount='1 из 3'
            title='Любимые подписки   в одном сервисе'
            image={imgStepOne}
            buttonText='Далее'
            onClick={handleClickFirstPage}
          />}
        />
        <Route path='/onboarding2d' element={
          <Onboarding
            progressValue='66'
            pageCount='2 из 3'
            title='Дополнительные бонусы'
            image={imgStepTwo}
            buttonText='Далее'
            onClick={handleClickSecondPage}
          />}
        />
        <Route path='/onboarding3d' element={
          <Onboarding
            progressValue='100'
            pageCount='3 из 3'
            title='Уже есть подписки?'
            image={imgStepThree}
            buttonText='Перейти к сервису'
            onClick={handleClickThirdPage}
          />} 
        />

        <Route path='/main/*' element={<MainPage />}>
          <Route path='service/:id' element={
            <Modal isTitle title='Описание подписки' >
              <TariffPage />
            </Modal>
          } />
          <Route path='tariff/:id' element={
            <Modal isTitle title='Описание тарифа' >
              <FinishTariffPage />
            </Modal>
          } />
          <Route path='tariff/:id/payment' element={
            <Modal isTitle title='Оформление подписки' >
              <PaymentPage />
            </Modal>
          } />
          <Route path='tariff/:id/cashbackinfo' element={
            <Modal isTitle={false} title='' >
              <CashbackInfo />
            </Modal>
          } />
          <Route path='tariff/:id/success' element={
            <Modal isTitle title='Подписка оформлена' >
              <SuccessPage />
            </Modal>
          } />
        </Route>   

        <Route path='/error' element={<Error />} />
       
        {/* <Route path='*' element={<NotFound404 />} />  */}

      </Routes>
  )
}

export default App