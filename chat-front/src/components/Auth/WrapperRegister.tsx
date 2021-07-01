import { FormValues, MyFormProps } from '../../types/types';
import { Register, validate } from '..';

import { withFormik } from 'formik';

type errorsType = {
  email?: string;
  password?: string | number;
  fullname?: string;
  password_2?: string | number;
};

const WrapperRegister = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    email: props.initialEmail || '',
    fullname: props.fullname || '',
    password: props.initialPassword || '',
    password_2: props.initialPassword || '',
  }),

  validate: (values) => {
    const errors: errorsType = {};

    validate({ isAuth: false, values, errors });

    return errors;
  },
  handleSubmit: (values, { setSubmitting, props }) => {
    props.fetchUserRegister(values).then((data: any) => {
      if (data.data.code === 11000) {
        alert('Пользователь с такой почтой уже зарегистрирован');
      } else if (data.data.code !== 11000 && data.status === 200) {
        props.history.push('/signin');
      }
      setSubmitting(false);
    });
  },
  displayName: 'RegisterForm',
})(Register);

export default WrapperRegister;
