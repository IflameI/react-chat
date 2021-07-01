import axios from 'axios';
import { useState, useEffect } from 'react';
import Loader from '../helpersComponents/Loader';
import { History } from 'history';

interface IRenderText {
  title: string;
  message: string;
  status: string;
}
interface IRenderTextProps {
  hash?: string;
  verified: boolean;
  checking: boolean;
}
interface ICheckEmailInfo {
  history: History;
}

const renderTextInfo = ({ hash, verified }: IRenderTextProps): IRenderText => {
  if (hash) {
    if (verified) {
      return {
        status: 'success',
        title: 'Готово!',
        message: 'Аккаунт успешно подтвержден!',
      };
    } else {
      return {
        status: 'error',
        title: 'Ошибка',
        message: 'Вы указали несуществующий или неверный хеш.',
      };
    }
  } else {
    return {
      status: 'info',
      title: 'Подтвердите почту',
      message: 'Ссылка с подтверждением аккаунта отправлена на E-Mail.',
    };
  }
};

const CheckEmailInfo: React.FC<ICheckEmailInfo> = ({ history }) => {
  const hash = location.search.split('hash=')[1];
  const [verified, setVerified] = useState(false);
  const [checking, setChecking] = useState(!!hash);
  const [info, setInfo] = useState(renderTextInfo({ hash, checking, verified }));

  const setStatus = ({ checking, verified }: IRenderTextProps) => {
    setInfo(renderTextInfo({ hash, checking, verified }));
    setVerified(verified);
    setChecking(checking);
  };

  useEffect(() => {
    if (hash) {
      axios
        .get('http://localhost:3000/user/verify?hash=' + hash)
        .then(() => {
          setStatus({ verified: true, checking: false });
        })
        .catch(() => {
          setStatus({ verified: false, checking: false });
        });
    }
  }, []);

  return (
    <>
      <div className='auth'>
        <div className='container'>
          <div className='auth__row'>
            {!checking ? (
              <div className='auth__item auth__item--check'>
                <div className='auth__top'>
                  <div className='auth__title'>{info.title}</div>
                  <div className='auth__text'>{info.message}</div>
                  {info.status === 'success' && verified && (
                    <div className='auth__button'>
                      <button onClick={() => history.push('/signin')}>Войти</button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckEmailInfo;
