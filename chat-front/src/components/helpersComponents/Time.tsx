/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { formatDistanceToNow } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
interface ITime {
  date: string;
}

const Time = ({ date }: ITime) => {
  return <> {formatDistanceToNow(new Date(date), { addSuffix: true, locale: ruLocale })}</>;
};

export default Time;
