import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const updateTimeInStorage = throttle(time => {
  localStorage.setItem('videoplayer-current-time', time);
}, 1000);

player.on('timeupdate', data => {
  const currentTime = data.seconds;
  updateTimeInStorage(currentTime);
});

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}
