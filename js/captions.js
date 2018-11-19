
const video = document.getElementsByTagName('video')[0];
const captions = document.querySelectorAll('p span');

video.addEventListener('timeupdate', () => {
  const time = video.currentTime;

  for (let i = 0; i < captions.length; i += 1){
    if(time > captions[i].getAttribute('data-start') && time < captions[i].getAttribute('data-end')){
      captions[i].style.color = '#ff8da1';
    }
    else{
      captions[i].style.color = '';
    }
  }
});
