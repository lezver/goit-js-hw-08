import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const checkTime = e => {
  const { seconds } = e;
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(checkTime, 1000));

const pausePlayer = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(pausePlayer || 0);
