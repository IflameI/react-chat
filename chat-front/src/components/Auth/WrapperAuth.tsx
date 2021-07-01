import { FormValues, MyFormProps } from '../../types/types';
import { withFormik } from 'formik';
import { Login } from '..';
import validate from '../../utils/validate';

type errorsType = {
  email?: string;
  password?: string | number;
};

const WrapperAuth = withFormik<MyFormProps, FormValues>({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    email: props.initialEmail || '',
    password: props.initialPassword || '',
  }),

  validate: (values) => {
    const errors: errorsType = {};
    validate({ isAuth: true, values, errors });

    return errors;
  },
  handleSubmit: async (values, { setSubmitting, props }) => {
    props.fetchUserLogin(values).then((data: any) => {
      if (data && data.status === 'success') {
        props.history.push('/');
      }
      setSubmitting(false);
    });
  },
  displayName: 'AuthForm',
})(Login);

export default WrapperAuth;
