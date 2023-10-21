const customVideoControls = $.querySelector(".custom-video-player");
const inputDurationRange = $.querySelector(".video-slider-duration input");
const animeVideoContainer = $.querySelector(".video-container-anime-watching");
const video = $.querySelector(".video-container-anime-watching video");
const playPause = $.querySelector(".play-pause");
const playPauseIcon = $.querySelector(".play-pause i");
const fullScreen = $.querySelector(".full-screen-option");
const currentTime = $.querySelector(".time-past");
const totalTime = $.querySelector(".total-time");
const videoRagneDuration = $.querySelector(".video-slider-duration input");
const volumeInput = $.getElementById("volume-input");

let isPlaying = false;
let hideTimeOut = null;
let videoInterval = null;

// CHANGE BACKGOUND COLOR OF CONTROLS WHEN MOUSE LEAVE CONTROLS BOX
customVideoControls.addEventListener("mouseleave", () => {
  customVideoControls.style.backgroundColor = "var(--videoControlsBackground)";
});

// CHANGE BACKGOUND COLOR OF CONTROLS WHEN MOUSE ENTER CONTROLS BOX
customVideoControls.addEventListener("mouseenter", () => {
  customVideoControls.style.backgroundColor = "#000";
});

// CONVERT SECONDS TO HOURS, MINUTES, SECONDS
function convertSeconds(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);

  hours = hours.toString();
  minutes = minutes.toString();
  seconds = seconds.toString();

  hours = hours.padStart(2, "0");
  minutes = minutes.padStart(2, "0");
  seconds = seconds.padStart(2, "0");
  return [hours, minutes, seconds];
}

// CHANGE TIME OF VIDEO BY CLICKING ON INPUT TIME RANGE
inputDurationRange.addEventListener("input", () => {
  let newCurrenntTime = (inputDurationRange.value * video.duration) / 100;
  video.currentTime = newCurrenntTime;
});

// HIDE CUSTOM CONTROLS AFTER 5 SECONDS MOUSE LEAVE
animeVideoContainer.addEventListener("mouseleave", () => {
  hideTimeOut = setTimeout(() => {
    customVideoControls.style.display = "none";
  }, 2000);
});

// SHOW CUSTOM CONTROLS WHILE MOUSE ENTER VIDEO
animeVideoContainer.addEventListener("mouseenter", () => {
  clearTimeout(hideTimeOut);
  customVideoControls.style.display = "block";
});

const playVideo = () => video.play;

//
playPause.addEventListener("click", () => {
  if (isPlaying) {
    video.pause();
    isPlaying = false;
  } else {
    video.play();
    isPlaying = true;
  }
  playPauseIcon.classList.toggle("fa-play");
  playPauseIcon.classList.toggle("fa-pause");
});

// VIDEO BECOME FULLSCREEN WHILE DOUBLE CLICK ON VIDEO
video.addEventListener("dblclick", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
});

// SHOW VIDEO DURATION AFTER VIDEO STARTS
function showVideoDuration() {
  let videoDuration = video.duration;
  let [h, m, s] = convertSeconds(videoDuration);
  totalTime.innerHTML = `${h}:${m}:${s}`;
}

// UPDATE VIDEO TIME RANGE WHILE VIDEO IS PLAYING
const updateTimeRange = () => {
  let newTimeValue = video.currentTime * (100 / video.duration);
  inputDurationRange.value = newTimeValue;
};

// SHOW CURRENT TIME AND UPDATE CHANGE TIME IN THIS FUNCTION
function passTime() {
  if (video.currentTime >= video.duration) {
    // pass
  } else if (isPlaying) {
    let curTime = video.currentTime;
    let [h, m, s] = convertSeconds(curTime);
    currentTime.innerHTML = `${h}:${m}:${s}`;
    updateTimeRange();
  } else {
    clearInterval(videoInterval);
  }
}

// WHILE VIDEO PLAYING SHOWS VIDEO DURATION AND OTHERS => passTime function
video.addEventListener("playing", () => {
  showVideoDuration();
  videoInterval = setInterval(passTime, 1000);
});

// CHANGE VOLUME OF VIDEO BY VOLUME INPUT
volumeInput.addEventListener("input", () => {
  let newVolume = volumeInput.value;
  video.volume = newVolume / 100;
});
