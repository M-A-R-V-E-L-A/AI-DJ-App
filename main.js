song = "";
music = "";

function preload() {
  music = loadSound("ApDhillon-Excuses.mp3");
  song = loadSound("BoyWithUke-Toxic.mp3");
}
function setup() {
  canvas = createCanvas(600, 500);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0, 600, 500);
}

function play() {
  song.play();
}

function pause() {
    song.pause();
  }

  function stop() {
    song.stop();
  }

  function next() {
   music.play();
    console.log("song is next");
  }
