import React, { useState, useRef, useEffect } from 'react';
import Picker from 'emoji-picker-react';
import { useActions } from '../../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';

type emojiObject = {
  emoji: string;
};

const MessagesInputPanel: React.FC = () => {
  const [togglePicker, setTogglePicker] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const { currentDialogsId } = useTypedSelector((state) => state.dialogs);

  const { fetchSendMessage } = useActions();

  const emojiRef = useRef<HTMLHeadingElement>(null);

  const onEmojiClick = (event: React.MouseEvent, emojiObject: emojiObject) => {
    setValue(value + emojiObject.emoji);
  };

  const onTogglePicker = () => {
    setTogglePicker(!togglePicker);
  };

  const onSendMessage = (value: string, currentDialogsId: string) => {
    fetchSendMessage(value, currentDialogsId);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    onSendMessage(value, currentDialogsId);
    setValue('');
  };
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  const handleOutsideClick = (e: any) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(emojiRef.current)) {
      setTogglePicker(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);
  return (
    <div className='dialogs-content__panel'>
      <div className='dialogs-content__panel-content'>
        <form onSubmit={handleSendMessage}>
          <div className='dialogs-content__send-message'>
            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder='Введите сообщение'
              onKeyDown={handleKeyDown}></textarea>
            <div ref={emojiRef} className='dialogs-content__emoji'>
              <button type='button' onClick={onTogglePicker}>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                  <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.507 13.941c-1.512 1.195-3.174 1.931-5.506 1.931-2.334 0-3.996-.736-5.508-1.931l-.493.493c1.127 1.72 3.2 3.566 6.001 3.566 2.8 0 4.872-1.846 5.999-3.566l-.493-.493zm-9.007-5.941c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z' />
                </svg>
              </button>
              {togglePicker && (
                <div className='dialogs-content__emoji-wrapper'>
                  <Picker
                    onEmojiClick={onEmojiClick}
                    disableAutoFocus={true}
                    groupNames={{ smileys_people: 'PEOPLE' }}
                    native
                  />
                </div>
              )}
            </div>
            <div className='dialogs-content__bottom'>
              <div className='dialogs-content__micro'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'></svg>
              </div>
            </div>
          </div>
          <div className='dialogs-content__button'>
            <button type='submit' className='avatar'>
              <img
                src='https://b.thumbs.redditmedia.com/tjmTLdN1v49BUWeI1q2xtY5mdMG5bV-A2ks1CksPZbA.png'
                alt=''></img>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessagesInputPanel;
