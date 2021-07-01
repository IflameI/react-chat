/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormikProps } from 'formik';

import { FormValues } from '../../types/types';

const Register = (props: FormikProps<FormValues>) => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, isSubmitting } =
    props;
  return (
    <div className='auth'>
      <div className='container'>
        <div className='auth__row'>
          <div className='auth__top'>
            <div className='auth__title'>Регистрация</div>
            <div className='auth__text'>Для входа в чат, вам нужно зарегистрироваться</div>
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
                    id='fullname'
                    type='text'
                    name='fullname'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullname}
                    placeholder='Ваше имя и фамилия'
                    className='text-input'></input>
                </div>
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
                <div className='auth__input'>
                  <input
                    id='password_2'
                    type='password'
                    name='password_2'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password_2}
                    placeholder='Повторите пароль'
                    className={
                      errors.password_2 && touched.password_2 ? 'text-input error' : 'text-input'
                    }></input>
                </div>
                {errors.password_2 && touched.password_2 && (
                  <div className='input-feedback'>{errors.password_2}</div>
                )}
                <div className='auth__button'>
                  {!isValid && (
                    <span className='auth__form-error'>Форма заполнена неправильно</span>
                  )}
                  <button
                    type='submit'
                    onClick={(event: React.MouseEvent<HTMLElement>) => {
                      handleSubmit;
                    }}
                    disabled={
                      isSubmitting ||
                      !!(errors.email && touched.email) ||
                      !!(errors.password && touched.password)
                    }>
                    ЗАРЕГИСТРИРОВАТЬСЯ
                  </button>
                </div>
              </div>
              <div className='auth__subtext'>
                <NavLink exact to='/signin'>
                  Войти в аккаунт
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
