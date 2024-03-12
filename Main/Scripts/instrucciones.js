var audio_click = new Audio("CSS/Sources/Sounds/click.mp3")

function click_sound_effect() {
  console.log(audio_click)
  audio_click.volume = 0.3;
  audio_click.currentTime = 0;

  audio_click.play();

  setTimeout(function(){audio_click.pause(); 
    audio_click.currentTime=0;}, 750);
  }