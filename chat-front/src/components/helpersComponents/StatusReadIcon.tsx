/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

interface IStatusReadIcon {
  isMe: boolean;
  isRead: boolean;
}

const StatusReadIcon = ({ isMe, isRead }: IStatusReadIcon) => {
  return (
    (isMe &&
      (isRead ? (
        <svg
          width='100%'
          height='100%'
          xmlns='http://www.w3.org/2000/svg'
          fillRule='evenodd'
          clipRule='evenodd'>
          <path d='M24 6.278l-11.16 12.722-6.84-6 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.278zm-22.681 5.232l6.835 6.01-1.314 1.48-6.84-6 1.319-1.49zm9.278.218l5.921-6.728 1.482 1.285-5.921 6.756-1.482-1.313z' />
        </svg>
      ) : (
        <svg
          width='14'
          height='14'
          xmlns='http://www.w3.org/2000/svg'
          fillRule='evenodd'
          clipRule='evenodd'>
          <path d='M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z' />
        </svg>
      ))) ||
    null
  );
};
export default StatusReadIcon;
