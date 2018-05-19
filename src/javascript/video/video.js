function drawVide(){
  var videoForm = document.getElementById('videoForm');
  //カメラの起動
  navigator.webkitGetUserMedia({video: true, audio: false}, _handleSuccess, _handleError);
  function _handleSuccess(localMediaStream) {
    videoForm.src = window.URL.createObjectURL(localMediaStream);
    videoForm.play();
    drawTrack(videoForm);
  }
  
  function _handleError() {
    alert("ERROR: カメラの使用を許可してください。");
  }
}

function drawTrack(videoForm){
  const trackForm = document.getElementById('trackForm');
  const ctracker = new clm.tracker();
  const cc = trackForm.getContext('2d');
  let flag = true
  ctracker.init(pModel);
  console.log(videoForm);
  ctracker.start(videoForm);
  function positionLoop() {
    requestAnimationFrame(positionLoop);
    positions = ctracker.getCurrentPosition();
     // positions = [[x_0, y_0], [x_1,y_1], ... ]
      // do something with the positions ...
  }
  positionLoop();

  function drawLoop() {
    requestAnimationFrame(drawLoop);
    var pos_array = ctracker.getCurrentPosition();
    console.log(pos_array)
    cc.clearRect(0, 0, trackForm.width, trackForm.height);
    ctracker.draw(trackForm);
  }
  drawLoop();
}
