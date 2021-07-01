/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { isToday, format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

export default function useTime(updatedAt: any) {
  let time;
  if (isToday(new Date(updatedAt))) {
    time = format(new Date(updatedAt), 'HH:mm', {
      locale: ruLocale,
    });
  } else {
    time = format(new Date(updatedAt), 'dd.MM.yyyy', {
      locale: ruLocale,
    });
  }
  return {
    time,
  };
}
