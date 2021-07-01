export interface FormValues {
  email: string;
  password: string;
  password_2?: string;
  fetchUserLogin?: any;
  fetchUserRegister?: any;
  history?: any;
  fullname?: string;
}

export interface MyFormProps {
  initialEmail?: string;
  initialPassword?: string;
  fullname?: string;
  fetchUserLogin?: any;
  fetchUserRegister?: any;
  history?: any;
}
