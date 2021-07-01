import React, { useState, useRef, useEffect } from 'react';
import { PlayIcon, PauseIcon, convertCurrentTime } from '../..';

interface IMessagesAudio {
  audio: string;
}

const MessagesAudio: React.FC<IMessagesAudio> = ({ audio }) => {
  const audioElem: any = useRef(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const togglePlay = () => {
    if (!isPlaying) {
      audioElem.current!.play();
    } else {
      audioElem.current!.pause();
    }
  };
  useEffect(() => {
    if (audioElem.current !== null) {
      audioElem.current!.volume = '0.03';
      audioElem.current!.addEventListener(
        'playing',
        () => {
          setIsPlaying(true);
        },
        false,
      );
      audioElem.current!.addEventListener(
        'ended',
        () => {
          setIsPlaying(false);
          setProgress(0);
          setCurrentTime(0);
        },
        false,
      );
      audioElem.current!.addEventListener(
        'pause',
        () => {
          setIsPlaying(false);
        },
        false,
      );
      audioElem.current.addEventListener('timeupdate', () => {
        const duration = (audioElem.current && audioElem.current.duration) || 0;
        setCurrentTime(audioElem.current.currentTime);
        setProgress((audioElem.current.currentTime / duration) * 100 + duration * 0.5);
      });
    }
  }, []);
  return (
    <div className='Messages-content__audio audio-cotntent'>
      <audio ref={audioElem} src={audio} preload='auto' />
      <div className='audio-cotntent__button'>
        <button onClick={togglePlay} className='audio-content__btn'>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
      <div className='audio-cotntent__bar'>
        <span className='audio-cotntent__fill' style={{ width: progress + '%' }}></span>
      </div>
      <div className='audio-cotntent__time'>{convertCurrentTime(currentTime)}</div>
    </div>
  );
};

export default MessagesAudio;
