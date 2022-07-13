const startBtn = document.getElementById("startBtn");
const video = document.getElementById("preview");

let stream;
let recorder;
let videoFile;

const handleDownload = () => {
  const a = document.createElement("a");
  a.href = videoFile;
  a.download = "My recoding.webm!!";
  document.body.appendChild(a);
  a.click();
};

const handleStop = () => {
  startBtn.innerText = "Download Recording";
  startBtn.removeEventListener("click", handleStop);
  startBtn.addEventListener("click", handleDownload);

  recorder.stop();
};

const handleStart = () => {
  startBtn.innerText = "Stop Recording";
  startBtn.removeEventListener("click", handleStart);
  startBtn.addEventListener("click", handleStop);
  recorder = new MediaRecorder(stream);
  recorder.ondataavailable = (event) => {
    videoFile = URL.createObjectURL(event.data);
    video.srcObject = null; // remove preview
    video.src = videoFile;
    video.loop = true;
    video.play();
  }; //ondataavailable makes file in memory of browser and browser give a url to access that file. then we use it !!
  // and it is event when record is fired.

  recorder.start();
};

const init = async () => {
  stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true,
  }); // mediaDevices can approach media device like mic, camera. plus we can choose option!
  // stream is data composed by 0 or 1 which is we put into somewhere.

  video.srcObject = stream;
  video.play();
};

init();

startBtn.addEventListener("click", handleStart);
