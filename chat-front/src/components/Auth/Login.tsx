/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NavLink } from 'react-router-dom';
import { FormikProps } from 'formik';

import { FormValues } from '../../types/types';

const Login = (props: FormikProps<FormValues>) => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, isSubmitting } =
    props;
  return (
    <div className='auth'>
      <div className='container'>
        <div className='auth__row'>
          <div className='auth__top'>
            <div className='auth__title'>Войти в аккаунт</div>
            <div className='auth__text'>Пожалуйста, войдите в свой аккаунт</div>
          </div>
          <form onSubmit={handleSubmit} className='auth__body'>
            <div className='auth__item'>
              <div className='auth__functional'>
                <div className='auth__input'>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder='E-mail'
                    className={
                      errors.email && touched.email ? 'text-input error' : 'text-input'
                    }></input>
                </div>
                {errors.email && touched.email && (
                  <div className='input-feedback'>{errors.email}</div>
                )}
                <div className='auth__input'>
                  <input
                    id='password'
                    type='password'
                    name='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder='Пароль'
                    className={
                      errors.password && touched.password ? 'text-input error' : 'text-input'
                    }></input>
                </div>
                {errors.password && touched.password && (
                  <div className='input-feedback'>{errors.password}</div>
                )}
                <div className='auth__button'>
                  {!isValid && (
                    <span className='auth__form-error'>Форма заполнена неправильно</span>
                  )}
                  <button
                    onClick={() => {
                      handleSubmit;
                    }}
                    disabled={
                      isSubmitting ||
                      !!(errors.email && touched.email) ||
                      !!(errors.password && touched.password)
                    }>
                    Войти в аккаунт
                  </button>
                </div>
              </div>
              <div className='auth__subtext'>
                <NavLink exact to='/signup'>
                  Зарегистрироваться
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
