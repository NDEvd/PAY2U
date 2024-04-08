import { FC, useEffect } from 'react';

import styles from './form.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TFormField } from '../../utils/types';
import { TextButton } from '../../ui/text-button/text-button';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from '../../services/store';
import { fetchPayAndGetPromocode } from '../../services/actions';

export const Form: FC = () => {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const dispatch =  useDispatch();
  // const promocodeRequest = useSelector(state => state.services.promocodeRequest);
  
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
    setValue,
  } = useForm<TFormField>({
    mode: 'all',
    defaultValues: {
      pay: 'СБП',
      extension: true,
      rulesOne: true,
      rulesTwo: true,
    }
  });

  const onSubmit: SubmitHandler<TFormField> = () => {
    if (id) {
      dispatch(fetchPayAndGetPromocode(id));
    }
    // promocodeRequest ? navigate(`/main/tariff/${id}/paymentResult`) : navigate(`/paymentError`);
    navigate(`/main/tariff/${id}/paymentResult`);
    reset();
  }
 

  useEffect(() => {
    setValue('name', 'Иванов Иван Иванович');
    setValue('phone', '+7 999 888 77 77');
  },[])

  return (
    <form action='' onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label htmlFor='name' className={styles.label}>
        ФИО
      </label>
      <input
        className={`${styles.label} ${styles.input}`}
        { ...register('name',
        {
          required: 'ФИО обязательное поле',
          pattern: {
            // value: /^[а-яё]+(?:[ -]{1}[а-яё]*)?$/i,
            value: /^([А-ЯЁа-яё]+\s*){1,5}$/,
            message: 'Введите корректные ФИО',
          },
        })} 
        placeholder='ФИО'
        type='text'
      />
      <span className={styles.span}>{errors && errors.name && errors.name.message}</span>

      <label htmlFor='phone' className={styles.label}>
        Номер телефона
      </label>
      <input 
        className={`${styles.label} ${styles.input}`}
        { ...register('phone',
        {
          required: 'Телефон обязательное поле',
          pattern: {
            value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
            message: 'Введите корректный номер'
          },
        })}
        placeholder='+7 (916) 123-45-67'
        type='text' 
      />
      <span className={styles.span}>{errors && errors.phone && errors.phone.message}</span>
      <label htmlFor='phone' className={styles.label}>
        Способ оплаты
      </label>
      <input
        className={`${styles.label} ${styles.input}`}
        { ...register('pay')}
        type='text' 
      />
      <span className={styles.span} />
      <div className={styles.sliderCheckbox}>
        <label className={styles.switch}
          htmlFor='extension' >Автопродление
          <input
            className={styles.switchInput}
            type='checkbox'
            id='extension'
            {...register('extension')}
          />
          <span className={styles.switchSlider} />
        </label>  
      </div>
      <TextButton text='Правила партнера' link='' />
      <div className={styles.checkbox}>
        <input
          className={styles.checkboxInput}
          type='checkbox'
          id='rulesOne'
          {...register('rulesOne', {
            required: 'Cогласие является обязательным',
          })}
        />
        <label className={styles.textCheckbox} htmlFor='rulesOne'>
          Согласен с правилами партнера
        </label>
      </div>
      <span className={styles.span}> {errors.rulesOne ? errors.rulesOne.message : ''}</span>
      <TextButton text='Политика обработки ПД' link='' />
      <div className={styles.checkbox}>
        <input
            className={styles.checkboxInput}
            type='checkbox'
            id='rulesTwo'
            {...register('rulesTwo', {
              required: 'Cогласие является обязательным',
            })}
          />
        <label className={styles.textCheckbox} htmlFor='rulesTwo'>
          Согласен с правилами обработки ПД
        </label> 
      </div>
      <span className={styles.span}> {errors.rulesTwo ? errors.rulesTwo.message : ''}</span>
      <button className={styles.button} type='submit'>Перейти к оплате</button>
    </form>
  );
}